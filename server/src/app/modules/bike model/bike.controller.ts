/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { BikeService } from './bike.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createBike =catchAsync( async (req: Request, res: Response) => {
  const bike = req.body;
  const result = await BikeService.createBikeIntoDB(bike);
  sendResponse(res, {
    success: true,
    message: 'Bike create successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});

const getAllBike = catchAsync(async (req: Request, res: Response) => {
  const queryData = req?.query;
  const result = await BikeService.getBikeIntoDB(queryData );
  sendResponse(res, {
    success: true,
    message: 'Bikes retrieved successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

const singleGetBike = async (req: Request, res: Response) => {
  try {
    console.log(req.params);
    const productId = req.params.productId;
    const result = await BikeService.singleBikeIntoDB(productId);
    res.status(200).json({
      success: true,
      message: 'bike are retrived successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error?.stack,
    });
  }
};
const updateBike = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    console.log(req.params);
    const body = req.body;
    const result = await BikeService.updateBikeIntoDB(productId, body);
    res.status(200).json({
      success: true,
      message: 'bike are retrived successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error?.stack,
    });
  }
};
const deleteBike = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await BikeService.deleteBikeIntoDB(productId);
    res.status(200).json({
      success: true,
      message: 'bike are retrived successfully',
      result: {},
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: error,
      stack: error?.stack,
    });
  }
};

export const bikeController = {
  createBike,
  getAllBike,
  singleGetBike,
  updateBike,
  deleteBike,
};
