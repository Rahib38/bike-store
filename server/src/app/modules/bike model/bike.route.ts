import express from 'express';
import { bikeController } from './bike.controller';
import { USER_ROLE } from '../auth/auth.interface';
import auth from '../../middlewares/auth';
const bikeRoutes = express.Router();

bikeRoutes.post('/',auth(USER_ROLE.admin), bikeController.createBike);
bikeRoutes.get('/:productId', bikeController.singleGetBike);
bikeRoutes.put('/:productId', bikeController.updateBike);
bikeRoutes.delete('/:productId', bikeController.deleteBike);
bikeRoutes.get('/', bikeController.getAllBike);
export default bikeRoutes
