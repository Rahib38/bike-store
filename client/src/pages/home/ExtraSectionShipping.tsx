const ExtraSectionShipping = () => {
  return (
    <div
      className=" bg-cover bg-center"
      style={{
        backgroundImage: `url('https://themebing.com/wp/motormania/wp-content/uploads/2020/05/pexels-javier-aguilera-2611691.jpg')`,
      }}
    >
      <div className="text-white  text-center p-10 justify-center flex ">
        <div className="flex gap-5">
          <div className="flex gap-8 w-96">
            <div>
              <img
                className="w-10 bg-white rounded-full "
                src="../../../public/construction_5680491.png"
                alt=""
              />
            </div>
            <div>
              <p>Free Shipping</p>
              <p>For orders from $50</p>
            </div>
          </div>
          <div className="flex gap-8 w-96">
            <div>
              <img
                className="w-10 bg-white rounded-full "
                src="../../../public/shield_10688469.png"
                alt=""
              />
            </div>
            <div>
              <p>
              100% Safety</p>
              <p>Only secure payments</p>
            </div>
          </div>
          <div className="flex gap-8 w-96">
            <div>
              <img
                className="w-10 bg-white rounded-full "
                src="../../../public/24-hours-support.png"
                alt=""
              />
            </div>
            <div>
              <p>
              Support 24/7</p>
              <p>Call us anytime</p>
            </div>
          </div>
          <div className="flex gap-8 ">
            <div>
              <img
                className="w-10 bg-white rounded-full "
                src="../../../public/fire_17086553.png"
                alt=""
              />
            </div>
            <div>
              <p>
              Hot Offers</p>
              <p>Discounts up to 90%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionShipping;
