import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Checkout = () => {
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [orderSummary] = useState([
    { id: 1, name: "Mountain Bike", price: 450, quantity: 1 },
    { id: 2, name: "Road Bike", price: 650, quantity: 2 },
  ]);

  const totalPrice = orderSummary.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // You can handle order submission logic here
  };

  return (
    <div className="bg-gray-50 py-12">
         <Helmet><title>RideOn Wheels | Checkout</title></Helmet>
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-emerald-600 text-center mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Billing Details */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Billing Details
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={billingDetails.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={billingDetails.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Address"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={billingDetails.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Phone Number"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-4">
              {orderSummary.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="text-lg text-gray-800 font-medium">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="text-lg text-gray-700">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <p className="text-xl font-semibold text-gray-800">Total</p>
              <p className="text-xl font-semibold text-emerald-600">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="mt-6 w-full bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition focus:outline-none"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

