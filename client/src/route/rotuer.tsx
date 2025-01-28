import App from "@/App";
import About from "@/pages/About";
import AllProductsPage from "@/pages/AllProductsPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/allProduct",
        element:<AllProductsPage></AllProductsPage>
      },
      {
        path:"/about",
        element:<About></About>
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
