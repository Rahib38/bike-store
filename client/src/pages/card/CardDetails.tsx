import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const CardDetails = () => {
  return (
    <div className="bg-gray-50 py-12">
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Product Title and Price */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-500">
            Mountain Bike X2000
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            A high-performance mountain bike built for adventure.
          </p>
          <p className="text-2xl font-bold text-gray-900 mt-4">$1,299.99</p>
        </div>

        {/* Product Images and Gallery */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            {/* Main Product Image */}
            <img
              src="https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/yamaha-select-model-metallic-red-1704802630538.png?q=80"
              alt="Mountain Bike X2000"
              className="w-full rounded-lg shadow-lg"
            />
            {/* Image Thumbnails */}
            <div className="grid md:grid-cols-3 grid-cols-1 mt-4 container mx-auto ">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/bw/models/colors/yamaha-select-model-metallic-black-2023-1680847548270.png?q=80"
                alt="Bike Image 1"
                className="w-28 md:44 h-24 rounded-lg cursor-pointer"
              />
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/--drum1727090924411.jpg?q=80"
                alt="Bike Image 2"
                className="w-28 md:44  h-24 rounded-lg cursor-pointer"
              />
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-classic-350-heritage1725274941405.jpg?q=80"
                alt="Bike Image 3"
                className="w-28 md:44  h-24 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Product Description */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Product Description
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              The Mountain Bike X2000 is a state-of-the-art cycling machine
              designed for the toughest trails and rugged terrains. Featuring
              high-quality suspension, an ultra-light aluminum frame, and a
              smooth gear system, this bike ensures an unmatched performance for
              both beginners and experienced riders.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Perfect for mountain bikers seeking adventure, the X2000 comes
              equipped with durable tires, ergonomic handlebars, and an advanced
              braking system for safety and stability on any trail.
            </p>

            {/* Product Features */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Features
            </h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3">
              <li>Lightweight aluminum frame for optimal performance.</li>
              <li>Shimano 21-speed gear system for smooth shifting.</li>
              <li>Hydraulic disc brakes for precise stopping power.</li>
              <li>Customizable suspension for various terrain types.</li>
              <li>Ergonomic saddle and handlebars for a comfortable ride.</li>
            </ul>

            {/* Product Specifications */}
            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
              Specifications
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between text-lg text-gray-700">
                <span>Frame Material:</span>
                <span className="font-semibold">Aluminum Alloy</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Wheel Size:</span>
                <span className="font-semibold">27.5 Inches</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Brake Type:</span>
                <span className="font-semibold">Hydraulic Disc Brakes</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Suspension Type:</span>
                <span className="font-semibold">Full Suspension</span>
              </div>
              <div className="flex justify-between text-lg text-gray-700">
                <span>Weight:</span>
                <span className="font-semibold">13.5 kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add to Cart & Wishlist */}
        <div className="flex items-center justify-end mt-8">
          <button className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 focus:outline-none">
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
      
        </div>

        {/* Product Reviews */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Customer Reviews
          </h2>

          {/* Review 1 */}
          <div className="border-t pt-4">
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <p className="text-lg text-gray-700 mt-2">
              "Absolutely love this bike! The suspension works wonders on rocky
              trails, and the braking is super responsive. Highly recommend!"
            </p>
            <div className="text-gray-600 mt-2">John Doe - 3 days ago</div>
          </div>

          {/* Review 2 */}
          <div className="border-t pt-4">
            <div className="flex items-center space-x-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-gray-300" />
            </div>
            <p className="text-lg text-gray-700 mt-2">
              "Great bike for the price. It's a bit heavy, but that's the
              tradeoff for durability. Overall, a solid purchase."
            </p>
            <div className="text-gray-600 mt-2">Jane Smith - 1 week ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
