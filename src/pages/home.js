import React, { Fragment, useState } from "react";
import Filter from "../components/Filter/Filter";
import ProductsGrid from "../components/ProductsGrid/ProductsGrid";
import data from "../db/data";
import SortDropdown from "../components/SortDropdown/SortDropdown";

const productsToShow = 5;

function Home() {
  const [products, setProducts] = useState(data);
  const [maxProducts, setMaxProducts] = useState(productsToShow);
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

  return (
    <>
      <div>
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
        />
      </div>

      <button
        className="load-more-button btn btn-outline-secondary"
        onClick={() => setMaxProducts(maxProducts + productsToShow)}
      >
        Load more
      </button>
    </>
  );
}

export default Home;
