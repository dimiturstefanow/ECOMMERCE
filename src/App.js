import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import data from "./db/data";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";
import "./app.css";
import SortDropdown from "./components/SortDropdown/SortDropdown";

const productsToShow = 5;

function App() {
  const [products, setProducts] = useState(data);
  const [maxProducts, setMaxProducts] = useState(productsToShow);
  const [favorites, setFavorites] = useState([]);
  const [sortData, setSortData] = useState({
    sort: 1,
    sortName: "Alphabetical a-z",
  });

  const callBack = (products) => {
    setMaxProducts(productsToShow);
    setProducts(products);
    setSortData({
      sort: 1,
      sortName: "Alphabetical a-z",
    });
  };

  const addToFav = (productId) => {
    setFavorites((previousState) => {
      const stateCopy = previousState.slice();
      const exists = previousState.indexOf(productId);

      if (exists === -1) {
        stateCopy.push(productId);
      } else {
        stateCopy.splice(exists, 1);
      }

      return stateCopy;
    });
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column">
        <div className="d-flex">
          <p
            style={{
              marginLeft: "auto",
              marginBottom: "0",
              alignSelf: "center",
              color: "#8e8a8a",
              fontSize: "16px",
            }}
          >
            Products displayed:{" "}
            {maxProducts > products.length
              ? maxProducts - (maxProducts - products.length)
              : maxProducts}
          </p>
          <SortDropdown
            sortName={sortData.sortName}
            callBack={(sortValue, sortName) => {
              setSortData({
                sort: sortValue,
                sortName: sortName,
              });
            }}
          />
        </div>
        <div className="d-flex flex-row">
          <Filter callBack={callBack} />
          <ProductsGrid
            products={products}
            maxProducts={maxProducts}
            sort={sortData.sort}
            favorites={favorites}
            addToFav={addToFav}
          />
        </div>

        <button
          className="load-more-button btn btn-outline-secondary"
          onClick={() => setMaxProducts(maxProducts + productsToShow)}
        >
          Load more
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
