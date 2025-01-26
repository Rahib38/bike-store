import { Bike } from './bike.interface';
import { BikeModel } from './bike.model';

const createBikeIntoDB = async (bike: Bike) => {
  const result = await BikeModel.create(bike);
  return result;
};

const getBikeIntoDB = async (searchTerm: string) => {
  let filter = {};
  const regex = new RegExp(searchTerm as string, 'i');
  filter = {
    $or: [
      {
        name: regex,
      },
      {
        brand: regex,
      },
      {
        category: regex,
      },
    ],
  };
  const result = await BikeModel.find(filter);
  return result;
};

const singleBikeIntoDB = async (_id: string) => {
  const result = await BikeModel.findById(_id);
  return result;
};

const updateBikeIntoDB = async (_id: string, bike: Bike) => {
  const result = await BikeModel.findByIdAndUpdate(_id, bike, { new: true });
  console.log(result, _id, bike);
  return result;
};

const deleteBikeIntoDB = async (_id: string) => {
  const result = await BikeModel.findByIdAndDelete(_id);
  return result;
};

export const BikeService = {
  createBikeIntoDB,
  getBikeIntoDB,
  singleBikeIntoDB,
  updateBikeIntoDB,
  deleteBikeIntoDB,
};
