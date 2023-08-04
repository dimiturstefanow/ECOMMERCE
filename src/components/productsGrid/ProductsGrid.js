import React from "react";
import Card from "./Card";
import "./ProductsGrid.css";

function ProductsGrid({ products, maxProducts, sort }) {
  if (sort == 1) {
    products.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort == 2) {
    products.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort == 3) {
    products.sort((a, b) => {
      const aPrice = parseFloat(
        (a.discountPrice == null ? a.price : a.discountPrice).replace("$", "")
      );
      const bPrice = parseFloat(
        (b.discountPrice == null ? b.price : b.discountPrice).replace("$", "")
      );
      return aPrice - bPrice;
    });
  } else if (sort == 4) {
    products.sort((a, b) => {
      const aPrice = parseFloat(
        (a.discountPrice == null ? a.price : a.discountPrice).replace("$", "")
      );
      const bPrice = parseFloat(
        (b.discountPrice == null ? b.price : b.discountPrice).replace("$", "")
      );
      return bPrice - aPrice;
    });
  }

  const result = products.map(
    ({ img, title, star, reviews, price, discountPrice }, index) => {
      if (index >= maxProducts) {
        return null;
      }

      return (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          price={price}
          discountPrice={discountPrice}
        />
      );
    }
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        maxHeight: "800px",
        overflowY: "scroll",
      }}
    >
      {result}
    </div>
  );
}

export default ProductsGrid;
