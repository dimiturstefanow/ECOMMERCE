import NavbarComponent from "./Navigation/NavbarComponent";
import FooterComponent from "./Navigation/FooterComponent";
import Products from "./Products/Products";
import "./App.css";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import products from "./db/data";

import { Card } from "react-bootstrap";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input Filter

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

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query)
  
  return (
    <>
      <div className="App">
        <NavbarComponent />
        <Sidebar handleChange={handleChange}/>
        <Recommended />
        <Products />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
