import { Tuser } from '@/components/ProfileDropDown';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import bcrypt from 'bcrypt';
import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import AppError from '../../Errors/appError';
import { TUser } from '../user/user.interface';
import User from '../user/user.mode';
import { createToken } from './auth.utills';
// type UserPayload = {
//   _id: Types.ObjectId;
//   name: string;
//   email: string;
// };
const register = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};
const login = async (payload: { email: string; password: string }) => {
  const user = await User.findOne({ email: payload?.email }).select(
    '+password',
  );
  if (!user) {
    throw new Error('This user is not found');
  }
  const userStatus = user?.isBlocked;
  if (userStatus) {
    throw new Error('This user is blocked!');
  }
  // console.log(payload, payload?.password, user?.password);
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    user?.password,
  );
  if (!isPasswordMatched) {
    throw new Error('Wrong Password!!!');
  }
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
    _id: user?._id,
  };
  // console.log("jwtPayload")
  const token = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '7d',
  });

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  // const refreshToken = jwt.sign(jwtPayload, config.jwt_refresh_secret as string, { expiresIn: config.jwt_refresh_expires_in as string });
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return { accessToken, refreshToken, user };
  // console.log("token")
  // return {token, user};
};

const updateUser= async(_id:string,user:Tuser)=>{
  console.log('object',_id,user)
const result = await User.findByIdAndUpdate(_id,user,{new:true})
return result
}

const singleUser = async (_id: string) => {
  console.log(_id,"kemon achen")
  const result = await User.findById(_id);
  console.log(result,"bugicugi")
  return result;
};
const resetPassword = async (
  payload: { oldPassword: string; newPassword: string },
  userData: JwtPayload,
) => {
  const userId = userData._id;
  const user = await User.findById(userId).select('+password');
  const ispassMatched = await bcrypt.compare(
    payload?.oldPassword,
    user?.password as string,
  );

  if (!ispassMatched) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'please enter current password.',
    );
  }

  const newPassword = await bcrypt.hash(payload?.newPassword, 8);

  const result = await User.findByIdAndUpdate(
    { _id: user?.id },
    { password: newPassword },
    { new: true },
  );

  return result;
};

const refreshToken = async (token: string, res: Response) => {
  let decoded;
  try {
    decoded = jwt.verify(
      token,
      config.jwt_refresh_secret as string,
    ) as JwtPayload;
  } catch (error) {
    res.clearCookie('refreshToken');
    throw new AppError(StatusCodes.UNAUTHORIZED, 'Expired refresh token');
  }
  const { _id } = decoded;
  const user = await User.findById(_id).select('+password');
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
  return accessToken;
};
export const AuthService = {
  register,
  login,
  refreshToken,
  resetPassword,
  singleUser,
  updateUser
};
