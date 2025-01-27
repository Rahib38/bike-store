/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import bcrypt from 'bcrypt';
import { TUser } from '../user/user.interface';
import User from '../user/user.mode';
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from '../../config';
import AppError from '../../Errors/appError';
import { StatusCodes } from 'http-status-codes';
import { createToken } from './auth.utills';
import { Response } from 'express';
// type UserPayload = {
//   _id: Types.ObjectId;
//   name: string;
//   email: string;
// };
const register = async (payload: TUser) => {
  
  const result = (await User.create(payload));
  return result;
};
const login = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload?.email }).select('+password');
  if (!user) {
    throw new Error('This user is not found');
  }
  const userStatus = user?.isBlocked;
  if (userStatus) {
    throw new Error('This user is blocked!');
  }
  console.log(payload,payload?.password,
    user?.password)
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password
  );
  if (!isPasswordMatched) {
    throw new Error('Wrong Password!!!');
  }
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
    _id:user?._id
  }
// console.log("jwtPayload")
  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn: '7d' });
// console.log("token")
  return {token, user};
};

const refreshToken = async (token: string,res:Response) => {
  let decoded;
  try {
    decoded= jwt.verify(
      token,
      config.jwt_refresh_secret as string,
    ) as JwtPayload;
  } catch (error) {
    res.clearCookie('refreshToken');
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Expired refresh token');
  }
  
  const { userId } = decoded;
  const user = await User.findById(userId).select('+password');
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, 'User not found');
  }

   // // checking if the user is inactive
   const userStatus = user?.isBlocked;

   if (userStatus) {
     throw new AppError(StatusCodes.FORBIDDEN, 'This user is blocked ! !');
   }
   //create token and sent to the  client side
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
    userId: user?._id,
  };

  // const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, { expiresIn: config.jwt_access_expires_in as string });
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  return accessToken
};
export const AuthService = {
  register,
  login,
  refreshToken
};
