import React, { useState } from "react";
import Filter from "./components/Filter/Filter";
import ProductsGrid from "./components/ProductsGrid/ProductsGrid";
import data from "./db/data";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Navigation/Footer";

function App() {
  const [products, setProducts] = useState(data);
  const [maxProducts, setMaxProducts] = useState(10);

  const callBack = (products) => {
    setMaxProducts(10);
    setProducts(products);
  };

  return (
    <div>
      <Navbar />

      <Filter callBack={callBack} />
      <ProductsGrid products={products} maxProducts={maxProducts} sort={3} />
      <button onClick={() => setMaxProducts(maxProducts + 1)}>Load more</button>
      <Footer />
    </div>
  );
}

export default App;
