import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
