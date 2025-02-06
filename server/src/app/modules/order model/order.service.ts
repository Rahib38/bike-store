/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from 'http-status-codes';
import AppError from '../../Errors/appError';
import { BikeModel } from '../bike model/bike.model';
import { TUser } from '../user/user.interface';
import User from '../user/user.mode';
import { orderModel } from './order.model';
import { orderUtils } from './order.utills';
import { Types } from 'mongoose';
// const createOder = async (user:Tuser,order: Order,client_ip:string) => {

//   const userData = await User.findById( user?._id );
//   console.log(userData,"userData")

//   const getbikeId = await BikeModel.findById(order?.product);
//   if (!getbikeId) {
//     const result = {
//       status: false,
//       message: 'bike not found!! please check your product id',
//     };
//     return result;
//   }

//   if (getbikeId.quantity < order.quantity) {
//     const result: any = {
//       status: false,
//       message: 'insufficient stock',
//     };
//     return result;
//   }
//   if (order.totalPrice !== getbikeId?.price * order.quantity) {
//     const result = {
//       status: false,
//       message: 'please the correct total price',
//     };
//     return result;
//   }

//   await getbikeId.save();
//   let orders = await orderModel.create(order);

//     // payment integration
//     const shurjopayPayload = {
//       amount: order.totalPrice,
//       order_id: orders?._id,
//       currency: 'BDT',
//       customer_name: userData?.name,
//       customer_email:userData?.email,
//       customer_phone: userData?.phone,
//       customer_city: userData?.city,
//       customer_address: userData?.address,
//       client_ip
//     };

//   const payment= await orderUtils.makePaymentAsync(shurjopayPayload)
// console.log(payment,"payment")

//   if (payment?.transactionStatus) {
//     orders = await orders.updateOne({
//         transaction: {
//             id: payment.sp_order_id,
//             transactionStatus: payment.transactionStatus,
//         },
//     });
// }

// return payment.checkout_url;

//   // return {
//   //   success: true,
//   //   message: 'order create successfully',
//   //   data: result,
//   // };
// };

const createOder = async (
  user: TUser,
  payload: { products: { _id: string; quantity: number }[] },
  client_ip: string,
) => {
  const id = user?._id;
  const userData = await User.findById(id);
  if (!payload?.products?.length)
    throw new AppError(403, 'Order is not specified');

  const products = payload.products;

  let totalPrice = 0;
  const productDetails = await Promise.all(
    products.map(async (item) => {
      const product = await BikeModel.findById(item._id);
      if (product) {
        const subtotal = product ? (product.price || 0) * item.quantity : 0;
        totalPrice += subtotal;
        return item;
      }

      // product?.quantity-=item?.quantity
      // if(product?.quantity===0){
      //   product.inStock=false
      // }
    }),
  );

  const transformedProducts: any[] = [];

  productDetails.forEach((product) => {
    transformedProducts.push({
      product: product?._id,
      quantity: product?.quantity,
    });
  });

  let order = await orderModel.create({
    user: id,
    products: transformedProducts,
    totalPrice,
  });

  // payment integration
  const shurjopayPayload = {
    amount: totalPrice,
    order_id: order._id,
    currency: 'BDT',
    customer_name: userData?.name,
    customer_address: userData?.address,
    customer_email: userData?.email,
    customer_phone: userData?.phone,
    customer_city: userData?.city,
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

  if (payment?.transactionStatus) {
    order = await order.updateOne({
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    });
  }

  return payment.checkout_url;
};

const getUserAllOrder = async (user: TUser) => {
  const result = await orderModel.find({ user: user?._id }).populate('user');

  return result;
};
const getadminAllOrder = async () => {
  const totalRevenue = await orderModel.aggregate([
    {
      $unwind: '$products', // Flatten products array to access each product's quantity
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
        totalSell: { $sum: '$products.quantity' }, // Sum all product quantities
      },
    },
    {
      $project: { _id: 0, totalRevenue: 1, totalSell: 1 },
    },
  ]);

  const allOrders = await orderModel.find().populate('user');
  return {
    allOrders,
    totalRevenue: totalRevenue[0] || { totalRevenue: 0, totalSell: 0 },
  };
};

const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);


  if (verifiedPayment[0]?.customer_order_id) {
    const findOrder = await orderModel.findById(
      verifiedPayment[0]?.customer_order_id,
    );
    for (const item of findOrder?.products as {
      product: Types.ObjectId;
      quantity: number;
    }[]) {
      const bike = await BikeModel.findById(item.product);
      if (!bike || bike.quantity < item.quantity) {
        throw new AppError(StatusCodes.CONFLICT,`Not enough stock for ${bike?.name}`);
      }

      bike.quantity -= item.quantity;
      if (bike.quantity === 0) {
        bike.inStock = false;
      }
console.log(bike,'bike')
      await bike.save();
    }

    //  try {
    //   const updatePromises = findOrder?.products.map(async ({ product, quantity }) => {
    //     const bike = await Bike.findById(product);

    //     if (!bike) {
    //       throw new Error(`Bike with ID ${product} not found`);
    //     }

    //     if (bike.quantity < quantity) {
    //       throw new Error(`Not enough stock for bike: ${bike.name}`);
    //     }

    //     bike.quantity -= quantity;
    //     await bike.save();
    //   });

    //   await Promise.all(updatePromises);
    //   return { success: true, message: "Stock updated successfully" };
    // } catch (error) {
    //   throw new Error(error.message);
    // }
  }

  if (verifiedPayment?.length) {
    await orderModel.findOneAndUpdate(
      {
        'transaction.id': order_id,
      },
      {
        'transaction.bank_status': verifiedPayment[0].bank_status,
        'transaction.sp_code': verifiedPayment[0].sp_code,
        'transaction.sp_message': verifiedPayment[0].sp_message,
        'transaction.transactionStatus': verifiedPayment[0].transaction_status,
        'transaction.method': verifiedPayment[0].method,
        'transaction.date_time': verifiedPayment[0].date_time,
        status:
          verifiedPayment[0].bank_status == 'Success'
            ? 'Paid'
            : verifiedPayment[0].bank_status == 'Failed'
              ? 'Pending'
              : verifiedPayment[0].bank_status == 'Cancel'
                ? 'Cancelled'
                : '',
      },
    );
  }

  return verifiedPayment;
};

// const getAllRevenue = async () => {
//   const result = await orderModel.aggregate([
//     {
//       $group: {
//         _id: null,
//         totalRevenue: {
//           $sum: '$totalPrice',
//         },
//       },
//     },

//     {
//       $project: {
//         _id: 0,
//         totalRevenue: 1,
//       },
//     },
//   ]);
//   if (result.length === 0) {
//     return { totalRevenue: 0 };
//   }
//   return result[0];
// };

export const orderService = {
  createOder,
  verifyPayment,
  getadminAllOrder,
  getUserAllOrder,
  // getAllRevenue,
};
