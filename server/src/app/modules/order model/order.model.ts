import { model, Schema } from 'mongoose';
// import { Order } from './order.interface';

const orderSchema = new Schema(
  // {
  //   email: {
  //     type: String,
  //   },
  //   product: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Bike',
  //   },
  //   quantity: {
  //     type: Number,
  //   },
  //   totalPrice: {
  //     type: Number,
  //   },
  // },
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'products',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    transaction: {
      id: String,
      transactionStatus: String,
      bank_status: String,
      sp_code: String,
      sp_message: String,
      method: String,
      date_time: String,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    toJSON: {
      transform: function (doc, ret) {
        delete ret.__v; // Remove __v field from output
      },
    },
  },
);

export const orderModel = model('Order', orderSchema);
