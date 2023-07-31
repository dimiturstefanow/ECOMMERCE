import NavbarComponent from "./Navigation/NavbarComponent";
import FooterComponent from "./Navigation/FooterComponent";
import Products from "./Products/Products";
import "./App.css";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input Filter
  const [query, setQuery] = useState("");

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // Radio Filter
  const handleChange = (event) => {
    selectedCategory(event.target.value);
  };

  

  // Buttons Filter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

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
