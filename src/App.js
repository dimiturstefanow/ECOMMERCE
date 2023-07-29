import NavbarComponent from "./Navigation/NavbarComponent";
import FooterComponent from "./Navigation/FooterComponent";
import Products from "./Products/Products";
import "./App.css";



function App() {
  return (
    <>
    <div className="App">
    <NavbarComponent />
    <Products />
    <FooterComponent />
    </div>
    </>
  );
}

export default App;
