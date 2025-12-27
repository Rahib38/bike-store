import express from 'express';
import { bikeController } from './bike.controller';
import { USER_ROLE } from '../auth/auth.interface';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BikeSchema } from './bike.validation';
const bikeRoutes = express.Router();

bikeRoutes.get('/:productId', bikeController.singleGetBike);
bikeRoutes.put('/:productId', bikeController.updateBike);
bikeRoutes.delete('/:productId', bikeController.deleteBike);
bikeRoutes.get('/', bikeController.getAllBike);
bikeRoutes.post('/',auth(USER_ROLE.admin),validateRequest(BikeSchema), bikeController.createBike);
export default bikeRoutes
