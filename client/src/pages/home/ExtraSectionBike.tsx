const ExtraSectionBike = () => {
  return (
    <div className="mt-8">
      <div className="flex container flex-col lg:flex-row mx-auto gap-5 ">
        <div className="relative">
          <img
            className="md:w-[900px] h-80"
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/01/ad.jpg"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center pl-4 lg:pl-12">
            <div>
              <p className=" md:text-lg  font-medium text-[#333333]">
                Power tools of next level
              </p>
              <h3 className="text-2xl md:text-5xl font-bold mt-2 text-[#333333]">
                Cruiser Bike
              </h3>
              <button className="mt-4 px-6 py-3 text-white  font-medium text-lg  bg-emerald-400 rounded-3xl transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="md:w-[900px] h-80"
            src="https://themebing.com/wp/motormania/wp-content/uploads/2021/02/ad-bmw.jpg"
            alt=""
          />
          <div
            className="absolute top-0 left-0 w-full h-full
        
        flex items-center pl-4 lg:pl-12"
          >
            <div>
              <p className=" md:text-lg  font-medium text-[#333333]">
                New Style Heritage Bike{" "}
              </p>
              <h3 className="text-2xl md:text-5xl font-bold mt-2 text-[#333333]">
                Heritage Bike
              </h3>
              <button className="mt-4 px-6 py-3 text-white  font-medium text-lg  bg-emerald-400 rounded-3xl transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionBike;
