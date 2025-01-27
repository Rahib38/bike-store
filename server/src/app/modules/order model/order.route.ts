import express from 'express';
import { orderController } from './order.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.interface';
const orderRoutes = express.Router();

orderRoutes.post('/',auth(USER_ROLE.admin), orderController.createOrder);
orderRoutes.get('/revenue',auth(USER_ROLE.customer), orderController.getTotalRevenue);
export  default orderRoutes
