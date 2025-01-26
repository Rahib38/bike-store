import express from 'express';
import { orderController } from './order.controller';
const orderRoutes = express.Router();

orderRoutes.post('/', orderController.createOrder);
orderRoutes.get('/revenue', orderController.getTotalRevenue);
export  default orderRoutes
