import { FaShippingFast, FaShieldAlt, FaHeadset, FaFire } from "react-icons/fa";

const ExtraSectionShipping = () => {
  return (
 <div className="mt-8">
     <div
      className="bg-cover bg-center py-12"
      style={{
        backgroundImage: `url('https://themebing.com/wp/motormania/wp-content/uploads/2020/05/pexels-javier-aguilera-2611691.jpg')`,
      }}
    >
      <div className="text-white text-center p-10 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-screen-lg mx-auto">
          {/* Free Shipping */}
          <div className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
            <div className="bg-white p-3 rounded-full">
              <FaShippingFast className="text-2xl text-emerald-600" />
            </div>
            <div>
              <p className="text-lg font-semibold">Free Shipping</p>
              <p>For orders from $50</p>
            </div>
          </div>

          {/* 100% Safety */}
          <div className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
            <div className="bg-white p-3 rounded-full">
              <FaShieldAlt className="text-2xl text-emerald-600" />
            </div>
            <div>
              <p className="text-lg font-semibold">100% Safety</p>
              <p>Only secure payments</p>
            </div>
          </div>

          {/* Support 24/7 */}
          <div className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
            <div className="bg-white p-3 rounded-full">
              <FaHeadset className="text-2xl text-emerald-600" />
            </div>
            <div>
              <p className="text-lg font-semibold">Support 24/7</p>
              <p>Call us anytime</p>
            </div>
          </div>

          {/* Hot Offers */}
          <div className="flex items-center justify-center gap-4 sm:flex-col sm:gap-2">
            <div className="bg-white p-3 rounded-full">
              <FaFire className="text-2xl text-emerald-600" />
            </div>
            <div>
              <p className="text-lg font-semibold">Hot Offers</p>
              <p>Discounts up to 90%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  );
};

export default ExtraSectionShipping;
