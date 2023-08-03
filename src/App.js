import React, { useState } from "react";
import Filter from "./components/filter/Filter";
import ProductsGrid from "./components/productsGrid/ProductsGrid";
import data from "./db/data";

function App() {
  const [products, setProducts] = useState(data);
  const [maxProducts, setMaxProducts] = useState(10);

  const callBack = (products) => {
    setMaxProducts(10);
    setProducts(products)
  }

  return (
    <div>
        <Filter callBack={callBack}/>
        <ProductsGrid products={products} maxProducts={maxProducts} sort={3}/>
        <button onClick={() => setMaxProducts(maxProducts + 1)}>Load more</button>
    </div>
  );
}

export default App;