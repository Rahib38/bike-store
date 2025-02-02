import { useState } from "react";
import { Helmet } from "react-helmet";

const Service = () => {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-12">
      {/* Page Header */}
      <Helmet><title>RideOn Wheels | Service</title></Helmet>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-emerald-600">Our Services</h1>
        <p className="text-lg text-gray-600 mt-3">
          Discover how RideOn Wheels can transform your biking experience.
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="bg-white rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About RideOn Wheels
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <p className="text-lg text-gray-600">
              At RideOn Wheels, we bring you the best biking experience with
              cutting-edge technology, premium-quality bikes, and exceptional
              services. Whether you’re a seasoned cyclist or a beginner, we
              offer everything you need: bike rentals, repairs, guided tours,
              and customizations tailored to your needs. Join us in creating
              unforgettable journeys on two wheels!
            </p>
            <img
              src="https://imgd.aeplcdn.com/664x374/n/bw/models/colors/royal-enfield-select-model-british-racing-green-1668419802695.jpg?q=80"
              alt="RideOn Wheels services"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "What services do you offer?",
                answer:
                  "We provide bike sales, repairs, rentals, guided tours, and customizations.",
              },
              {
                question: "What makes RideOn Wheels unique?",
                answer:
                  "We prioritize quality, safety, and customer satisfaction, offering tailored services and high-performance bikes.",
              },
              {
                question: "How can I book a guided bike tour?",
                answer:
                  "You can book a tour through our website or visit our store directly to discuss your preferences.",
              },
              {
                question: "Do you provide group discounts?",
                answer:
                  "Yes, we offer special discounts for groups and events. Contact us for more details.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{faqOpen === index ? "-" : "+"}</span>
                </button>
                {faqOpen === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Open and Close Timings */}
        <div className="bg-white rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Operating Hours
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-600">
            <div>
              <p className="font-semibold">Monday - Friday:</p>
              <p>9:00 AM - 7:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Saturday:</p>
              <p>10:00 AM - 5:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Sunday:</p>
              <p>Closed</p>
            </div>
            <div>
              <p className="font-semibold">Holidays:</p>
              <p>10:00 AM - 3:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-emerald-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg text-gray-600">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-emerald-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-gray-600">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-emerald-300"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-emerald-500 text-white py-3 px-6 rounded-lg hover:bg-emerald-600 transition focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Service;
