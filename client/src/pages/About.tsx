import { Helmet } from "react-helmet";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // FontAwesome icons

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
         <Helmet><title>RideOn Wheels | About</title></Helmet>
      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-500">About Our Company</h1>
          <p className="text-lg text-gray-700 mt-4">
            Welcome to RideOn Wheels – where cycling meets passion, performance, and sustainability.
          </p>
        </div>

        {/* Company Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-6">
              At <strong>RideOn Wheels</strong>, we believe that every cyclist deserves a high-quality, reliable, and
              stylish bike. Founded with a love for cycling, we aim to provide riders of all levels with the best possible
              experience. Our commitment is to ensure that each bike is crafted with the utmost care and built for
              performance, durability, and comfort.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you’re commuting through the city or hitting the trails, our range of bikes is designed to support
              all your riding needs. We are dedicated to making cycling enjoyable and accessible to everyone – no matter
              their riding style.
            </p>
          </div>

          {/* Bike Images */}
          <div className="grid grid-cols-1 gap-6">

            <img
              src="https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-classic-350-heritage1725274941405.jpg?q=80"
              alt="Bike Image 3"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            At RideOn Wheels, our mission is to inspire and empower individuals through the joy of cycling. We are
            dedicated to providing innovative and sustainable biking solutions while fostering a vibrant cycling community
            where riders can share experiences, knowledge, and passion.
          </p>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            We envision a world where cycling is not just a mode of transport, but a lifestyle that promotes health,
            environmental sustainability, and connectivity. Our vision is to lead the industry in eco-friendly, high-performance
            bikes that meet the evolving needs of our customers.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-4">
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to
            reach out to us. Here’s how you can contact us:
          </p>
          <div className="flex items-center space-x-6">
            <FaMapMarkerAlt className="text-emerald-500" />
            <span className="text-lg text-gray-700">Located in the heart of the city</span>
          </div>
          <div className="flex items-center space-x-6 mt-4">
            <FaPhoneAlt className="text-emerald-500" />
            <span className="text-lg text-gray-700">Call us at: (123) 456-7890</span>
          </div>
          <div className="flex items-center space-x-6 mt-4">
            <FaEnvelope className="text-emerald-500" />
            <span className="text-lg text-gray-700">Email: contact@rideonwheels.com</span>
          </div>
        </div>

        {/* Values and Commitment */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
          <p className="text-lg text-gray-700 mb-6">
            At RideOn Wheels, our commitment goes beyond just providing exceptional bikes. We are dedicated to ensuring
            that our customers have access to the best cycling products and services available. We focus on:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li>Quality: Every bike we sell is built with precision and high-grade materials.</li>
            <li>Innovation: Continuously improving our bikes with the latest technologies and design trends.</li>
            <li>Sustainability: Striving to reduce our environmental footprint through eco-friendly products and practices.</li>
            <li>Community: Building a strong cycling community by hosting events, rides, and collaborations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
