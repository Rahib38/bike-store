import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { MdGridView } from "react-icons/md";

import { Link, Outlet, useLocation } from "react-router-dom";

const adminNavItems = [
  {
    title: "Admin Dashboard",
    icons: <FaHome className="mr-2" />,
    link: "/adminDashboard",
    path: "/adminDashboard",
  },
  {
    title: "Add Product",
    icons: <IoIosAddCircle className="mr-2" />,
    link: "addProduct",
    path: "/adminDashboard/addProduct",
  },
  {
    title: "All Products",
    icons: <MdGridView className="mr-2" />,
    link: "allProducts",
    path: "/adminDashboard/allProducts",
  },
];

const AdminDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const location = useLocation();
  console.log(location)

  return (
    <div>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-emerald-500 h-16 w-full flex items-center justify-between px-6 text-white shadow-md">
          <h1 className="text-xl font-bold">Professional DashboardLayout</h1>
          {/* Sidebar Toggle Button */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
            ${
              isToggleOpen
                ? "lg:hidden visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0"
                : ""
            }
          `}
            onClick={() => {
              setIsToggleOpen(!isToggleOpen);
              setIsSidebarOpen(!isSidebarOpen);
            }}
            aria-expanded={isSidebarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>
          {/* User Avatar */}
          <div className="hidden lg:flex items-center space-x-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <span className="text-white font-semibold">John Doe</span>
          </div>
        </header>

        <div className="flex flex-grow">
          {/* Sidebar */}
          <aside
            className={`bg-emerald-600 text-white lg:static fixed top-0 left-0 z-20 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 lg:translate-x-0 w-64 lg:w-auto min-h-screen flex flex-col space-y-6 py-6 px-4 shadow-lg`}
          >
            <h2 className="text-lg font-semibold">Menu</h2>
            <ul className="space-y-4">
              {adminNavItems.map((item, index) => (
                <li key={index+1}>
                  <Link
                    to={item?.link}
                    className="flex items-center py-2 px-4 rounded-lg hover:bg-emerald-500 hover:text-white transition"
                  >
                    <button
                      className={`flex items-center ${
                        location?.pathname === item?.path?"text-red-500":""
                      }`}
                    >
                      {item?.icons}
                      {item?.title}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
     <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
