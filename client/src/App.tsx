import { Outlet } from "react-router-dom";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
