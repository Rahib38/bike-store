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

const singleGetBike =catchAsync( async (req: Request, res: Response) => {
  const productId = req.params.productId;
  // console.log(productId)
  const result = await BikeService.singleBikeIntoDB(productId);
  sendResponse(res, {
    success: true,
    message: 'Bike retrieved successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});
const updateBike =catchAsync( async (req: Request, res: Response) => {
  const productId = req.params.productId;
  // console.log(req.params);
  const body = req.body;
  const result = await BikeService.updateBikeIntoDB(productId, body);
  sendResponse(res, {
    success: true,
    message: 'Bike update successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });

});
const deleteBike = async (req: Request, res: Response) => {
  const productId = req.params.productId;
 const result= await BikeService.deleteBikeIntoDB(productId);
  sendResponse(res, {
    success: true,
    message: 'Bike deleted successfully',
    statusCode: StatusCodes.OK,
    data: result
  });
};

export const bikeController = {
  createBike,
  getAllBike,
  singleGetBike,
  updateBike,
  deleteBike,
};
