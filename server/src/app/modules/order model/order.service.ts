/* eslint-disable @typescript-eslint/no-explicit-any */
import { BikeModel } from '../bike model/bike.model';
import { TUser } from '../user/user.interface';
import { Order } from './order.interface';
import { orderModel } from './order.model';
import { orderUtils } from './order.utills';
const createOder = async (order: Order, user: TUser) => {
  const getbikeId = await BikeModel.findById(order?.product);
  if (!getbikeId) {
    const result = {
      status: false,
      message: 'bike not found!! please check your product id',
    };
    return result;
  }

  if (getbikeId.quantity < order.quantity) {
    const result: any = {
      status: false,
      message: 'insufficient stock',
    };
    return result;
  }
  if (order.totalPrice !== getbikeId?.price * order.quantity) {
    const result = {
      status: false,
      message: 'please the correct total price',
    };
    return result;
  }
  getbikeId.quantity -= order.quantity;
  if (getbikeId.quantity === 0) {
    getbikeId.inStock = false;
  }
  await getbikeId.save();
  const result = await orderModel.create(order);

//   // payment integration
//   const shurjopayPayload = {
//     amount: order.totalPrice,
//     order_id: 'N/A',
//     currency: 'BDT',
//     customer_name: user?.name,
//     customer_email: user?.email,
//     customer_phone: "N/A",
//     customer_city: "N/A",
//   };

// await orderUtils.makePayment(shurjopayPayload)

  return {
    success: true,
    message: 'order create successfully',
    data: result,
  };
};

const getAllRevenue = async () => {
  const result = await orderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: '$totalPrice',
        },
      },
    },

    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  if (result.length === 0) {
    return { totalRevenue: 0 };
  }
  return result[0];
};

export const orderService = {
  createOder,
  getAllRevenue,
};
