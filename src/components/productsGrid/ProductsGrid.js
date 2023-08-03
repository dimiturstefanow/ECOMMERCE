import React from "react";
import Card from "./Card";

function ProductsGrid({ products, maxProducts, sort}) {
  console.log(products)
  if (sort == 1) {
    products.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort == 2) {
    products.sort((a, b) => !a.title.localeCompare(b.title));
  } else if (sort == 3) {
    products.sort((a, b) => a.discountPrice == null ? a.price : a.discountPrice - b.discountPrice == null ? b.price : b.discountPrice)
  } else {
    products.sort((a, b) =>  b.discountPrice == null ? b.price : b.discountPrice - a.discountPrice == null ? a.price : a.discountPrice)
  }

  console.log(products);

  const result = products.map(
    ({ img, title, star, reviews, price, discountPrice }, index) => {
      if (index >= maxProducts) {
        return;
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
    <div>
      {result}
    </div>
  );
}

export default ProductsGrid;
