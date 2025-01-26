import { StatusCodes } from 'http-status-codes';
import AppError from '../../Errors/appError';
import User from '../user/user.mode';

const blockUser = async (userId: string) => {
  const checkUser = await User.findById(userId);
  if (!checkUser) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User Not found');
  } else if (checkUser.isBlocked) {
    throw new AppError(StatusCodes.BAD_REQUEST, 'User is Blocked');
  }
  const updateBlog = await User.findByIdAndUpdate(
    userId,
    { isBlocked: true },
    { new: true },
  );
  if (!updateBlog) {
    throw new AppError(
      StatusCodes.BAD_REQUEST,
      'user not blocked! try again later......👻',
    );
  }
};

export const AdminService = {
  blockUser,
};
