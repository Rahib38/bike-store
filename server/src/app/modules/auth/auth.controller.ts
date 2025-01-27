/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const register = catchAsync(async (req: Request, res: Response) => {
  req.body.role = req.body.role || 'user'; // Set default if not provided
  const result = await AuthService.register(req.body);

  // const { _id, name, email } = result;

  sendResponse(res, {
    success: true,
    message: 'User register successfully',
    statusCode: StatusCodes.CREATED,
    data: result,
  });
});
const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: StatusCodes.OK,
    data: {
      token: result.token,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthService.refreshToken(refreshToken, res);
  // console.log(result,"controler result");
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: StatusCodes.OK,
    data: {
      token: result,
    },
  });
});
const logOut = (req: Request, res: Response) => {
  res.clearCookie('refreshToken');
  sendResponse(res, {
    success: true,
    message: 'Logout',
    statusCode: StatusCodes.OK,
    data: [],
  });
};
export const AuthController = {
  register,
  login,
  refreshToken,
  logOut,
};
