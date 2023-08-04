import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column">
        <div className="d-flex">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
