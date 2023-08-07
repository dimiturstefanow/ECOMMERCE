import React from "react";
import Card from "./Card";
import "./ProductsGrid.css";

function ProductsGrid({ products, maxProducts, sort, favorites, addToFav }) {
  if (sort == 1) {
    products.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort == 2) {
    products.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort == 3) {
    products.sort((a, b) => {
      const aPrice = a.discountPrice > 0 ? a.discountPrice : a.price;
      const bPrice = b.discountPrice > 0 ? b.discountPrice : b.price;
      return aPrice - bPrice;
    });
  } else if (sort == 4) {
    products.sort((a, b) => {
      const aPrice = a.discountPrice > 0 ? a.discountPrice : a.price;
      const bPrice = b.discountPrice > 0 ? b.discountPrice : b.price;
      return bPrice - aPrice;
    });
  }

  const result = products.map(
    ({ img, title, star, reviews, price, discountPrice, id }, index) => {
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
        addToFav={() => addToFav(id)}
        isFavorite={favorites.includes(id)}
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
