import { FaCogs, FaMotorcycle } from "react-icons/fa";

const PowerFulBike = () => {
  return (
    <div>
      <div className="container mx-auto mt-5">
        <div className="bg-white rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 items-center justify-between">
            <div className="space-y-5">
              <h3 className="text-5xl font-bold">
                World most <br />
                powerful bike
              </h3>
              <p>
                At RideOn Wheels, our mission is to inspire and empower
                individuals through the joy of cycling. We are dedicated to
                providing innovative and sustainable biking solutions while
                fostering a vibrant cycling community where riders can share
                experiences, knowledge, and passion.
              </p>
              <div className="flex flex-col lg:flex-row ;lg:items-center lg:gap-10">
                <div className="flex items-center gap-10">
                  <button className="">
                    <FaMotorcycle className="text-6xl" />
                  </button>
                  <div>
                    <h4 className="text-xl font-semibold">Engine Power</h4>
                    <p>205hp (151 kW)</p>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <button className="">
                  <FaCogs className="text-6xl" />
                  </button>
                  <div>
                    <h4 className="text-xl font-semibold">Engine type</h4>
                    <p>4-Stroke Cylinder</p>
                  </div>
                </div>
            
              </div>
              <button className="bg-emerald-400 text-white  rounded-2xl p-1 px-4 ">
                Learn More
              </button>
            </div>
            <div>
              <img
                src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/bmw-bike.png"
                alt="RideOn Wheels services"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerFulBike;
