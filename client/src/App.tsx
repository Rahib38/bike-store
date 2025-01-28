import { Outlet } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
      <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </>
  );
}

export default App;
