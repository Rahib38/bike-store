import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminService } from './admin.service';

const blockUser = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const result = await AdminService.blockUser(userId);
  sendResponse(res, {
    success: true,
    message: 'user blocked successfully',
    statusCode: StatusCodes.OK,
    data: result,
  });
});

export const AdminController = {
  blockUser,
};
