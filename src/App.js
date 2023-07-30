import NavbarComponent from "./Navigation/NavbarComponent";
import FooterComponent from "./Navigation/FooterComponent";
import Products from "./Products/Products";
import "./App.css";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <NavbarComponent />
        <Sidebar />
        <Recommended />
        <Products />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
