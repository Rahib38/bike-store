import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await orderService.createOder(order);
    res.status(200).json({
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'create oder went wrong',
      error: error,
    });
  }
};

const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllRevenue();
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Revenue calculated went wrong',
      error: error,
    });
  }
};

export const orderController = {
  getTotalRevenue,
  createOrder,
};
