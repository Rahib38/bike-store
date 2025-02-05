import { Router } from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from '../user/user.validation';
import { AuthValiditon } from './auth.Validation';
import { AuthController } from './auth.controller';

const authRouter = Router();

authRouter.post(
  '/register',
  validateRequest(userValidation.userValidationSchema),
  AuthController.register,
);
authRouter.post(
  '/login',
  validateRequest(AuthValiditon.loginValidationSchema),
  AuthController.login,
);
authRouter.get(
  '/user/:id',

  AuthController.singleUser,
);
authRouter.patch(
  '/user/updateProfile',auth("admin","customer"),
validateRequest(userValidation.userProfileValidationSchema),
  AuthController.updateUser,
);
authRouter.post(
  '/refresh-token',
  validateRequest(AuthValiditon.refreshTokenValidationSchema),
  AuthController.refreshToken,
);

authRouter.patch(
  '/change-password',
  auth('admin', 'customer'),
  AuthController.resetPassword,
);
authRouter.post('/logout', AuthController.logOut);
export default authRouter;
