import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";



import { Autoplay, History, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className=" relative">
      <Swiper
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        history={{
          key: "/",
        }}
        modules={[Autoplay, Navigation, Pagination, History]}
        className="mySwiper  rounded-xl container relative"
      >
        {/* Slide 1 */}
        <SwiperSlide data-history="/">
          <div className="relative">
            <img
              className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://img.freepik.com/free-photo/cool-motorbike-with-beautiful-landscape_23-2150810287.jpg?ga=GA1.1.938237795.1710318786&semt=ais_hybrid"
              alt="Adventure Slide"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Explore the Adventure</h2>
                <p className="text-lg mb-6">Experience the thrill of mountain biking in the wild!</p>
                <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide data-history="/">
          <div className="relative">
            <img
              className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://img.freepik.com/premium-photo/vintage-motorcycle_2221-1101.jpg?ga=GA1.1.938237795.1710318786&semt=ais_hybrid"
              alt="Road Bike Slide"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Embrace the Road</h2>
                <p className="text-lg mb-6">Conquer the roads with our advanced road bikes.</p>
                <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide data-history="/">
          <div className="relative">
            <img
              className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://img.freepik.com/premium-photo/bearded-brutal-man-sunglasses-leather-jacket-sitting-motorcycle-road-forest_90153-2514.jpg?ga=GA1.1.938237795.1710318786&semt=ais_hybrid"
              alt="Outdoor Ride Slide"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Outdoor Exploration</h2>
                <p className="text-lg mb-6">Discover the beauty of nature with our bikes.</p>
                <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide data-history="/">
          <div className="relative">
            <img
              className="w-full object-cover rounded-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              src="https://img.freepik.com/free-photo/young-handsome-man-posing-near-his-motorbike-countryside-road_176420-2530.jpg?ga=GA1.1.938237795.1710318786&semt=ais_hybrid"
              alt="Cycling Slide"
            />
            <div className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="text-center text-white px-6 sm:px-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Bikeing the World</h2>
                <p className="text-lg mb-6">Join us for a journey around the world on two wheels.</p>
                <button className="bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
