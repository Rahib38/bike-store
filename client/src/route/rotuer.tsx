import App from "@/App";
import AdminDashboardLayout from "@/components/layout/AdminDashboardLayout";
import UserDashboard from "@/components/layout/UserDashboard";

import About from "@/pages/About";
import Overview from "@/pages/AdminDashboard/Overview";
import AllProducts from "@/pages/AdminDashboard/productManagement/AllProducts";
import AllUser from "@/pages/AdminDashboard/UserManagement/AllUser";
import ProfileSettings from "@/pages/AdminDashboard/UserManagement/ProfileSettings";
import AllProductsPage from "@/pages/AllProductsPage";
import CardDetails from "@/pages/card/CardDetails";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Service from "@/pages/Service";
import DashboardProtected from "@/utils/DashboardProtected";
import ProtectedRoutes from "@/utils/ProtectedRoutes";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProduct",
        element: <AllProductsPage></AllProductsPage>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/cardDetails/:id",
        element: <CardDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <ProtectedRoutes> <Checkout></Checkout></ProtectedRoutes>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/adminDashboard",
    element:<DashboardProtected role="admin"> <AdminDashboardLayout /></DashboardProtected>,
    children: [
      {
        index: true,
        element: <Overview />,
      },

      {
        path: "allProducts",
        element: <AllProducts />,
      },
      {
        path: "allUsers",
        element: <AllUser />,
      },
      {
        path: "profileSettings",
        element: <ProfileSettings />,
      },
    ],
  },
  {
    path: "/userDashboard",
    element: <DashboardProtected role="customer"> <UserDashboard /></DashboardProtected>,
    children: [
      {
        index: true,
        element: <Overview />,
      },
    ],
  },
]);

export default router;
