import React, { useState } from "react";
import data from "../../db/data";

function Filter({ callBack }) {
  const [filter, setFilter] = useState({
    color: null,
    price: null,
    category: null,
    company: null,
  });

  console.log(filter);

  const [shouldFilter, setShouldFilter] = useState(false);

  const filterProducts = () => {
    let result = null;
    if (
      Object.values(filter).every((value) => {
        return value === null;
      })
    ) {
      result = data;
    } else {
      result = [];
      for (let product of data) {
          let match = true;
          if (filter.category != null && product.category != filter.category) {
              match = false;
              continue;
          }
          if (filter.color != null && product.color != filter.color) {
              match = false;
              continue;
          }
          if (filter.company != null && product.company != filter.company) {
            match = false;
            continue;
          }
          if (filter.price != null) {
           const prices = filter.price.split("-");
           const productPrice = parseFloat((product.discountPrice == null ? product.price : product.discountPrice).replace("$", ""));

           if (prices.length === 2) {
              match = productPrice >= prices[0] && productPrice <= prices[1];
           } else {
              match = productPrice >= prices[0];
           }
          }

          if (match) {
            result.push(product);
          }
      }
    }

    setShouldFilter(false);
    callBack(result);
  };

  const changeFilter = (event) => {
    event.target.checked = false;

    const name = event.target.name;
    const value = event.target.value;
    console.log(value)
    if (filter[name] === value || value === "null") {
      setFilter({
        ...filter,
        [name]: null,
      });
    } else {
      setFilter({
        ...filter,
        [name]: value,
      });
    }

    setShouldFilter(true);
  };

  if (shouldFilter) {
    filterProducts();
  }

  return (
    <div>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="null"
          name="category"
        />
        <span className="checkmark">All</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="sneakers"
          name="category"
        />
        <span className="checkmark">Sneakers</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="flats"
          name="category"
        />
        <span className="checkmark">Flats</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="sandals"
          name="category"
        />
        <span className="checkmark">Sandals</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="null"
          name="color"
        />
        <span className="checkmark">All</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="black"
          name="color"
        />
        <span className="checkmark">Black</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="blue"
          name="color"
        />
        <span className="checkmark">Blue</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="red"
          name="color"
        />
        <span className="checkmark">Red</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="green"
          name="color"
        />
        <span className="checkmark">Green</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="white"
          name="color"
        />
        <span className="checkmark">White</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="null"
          name="price"
        />
        <span className="checkmark">All</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="0-50"
          name="price"
        />
        <span className="checkmark">$0 - $50</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="50-100"
          name="price"
        />
        <span className="checkmark">$50 - $100</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="100-150"
          name="price"
        />
        <span className="checkmark">$100 - $150</span>
      </label>
      <label className="sidebar-label-container">
        <input
          onChange={changeFilter}
          type="radio"
          value="150"
          name="price"
        />
        <span className="checkmark">Over $150</span>
      </label>
    </div>
  );
}

export default Filter;
