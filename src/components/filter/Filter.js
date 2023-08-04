import React, { useState } from "react";
import products from "../../db/data";
import "./Filter.css";

function Filter({ callBack }) {
  const [filter, setFilter] = useState({
    color: null,
    price: null,
    category: null,
    company: null,
  });

  const [shouldFilter, setShouldFilter] = useState(false);

  const filterProducts = () => {
    const hasFilter = Object.values(filter).some((value) => value !== null);
    const result = !hasFilter
      ? products 
      : products.filter((p) => {
          if (filter.category != null && p.category != filter.category) return false;
          if (filter.color != null && p.color != filter.color) return false;
          if (filter.company != null && p.company != filter.company) return false;
          if (filter.price != null) {
            const prices = filter.price.split("-");
            const minPrice = prices[0]
            const maxPrice = prices.length > 1 ? prices[1] : null;
            const price = p.discountPrice > 0 ? p.discountPrice : p.price;

            return maxPrice > 0
              ? price >= minPrice && price <= maxPrice
              : price >= minPrice;
          }

          return true;
        });

    setShouldFilter(false);
    callBack(result);
  };

  const changeFilter = (event) => {
    event.target.checked = false;

    const name = event.target.name;
    const value = event.target.value;

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
    <div className="sidebar-filter">
      <div>
        <h2>Category</h2>
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
      </div>
      <div>
        <h2>Color</h2>
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
      </div>
      <div>
        <h2>Price</h2>
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
      <div>
        <h2>Company</h2>
        <label className="sidebar-label-container">
          <input
            onChange={changeFilter}
            type="radio"
            value="Adidas"
            name="company"
          />
          <span className="checkmark">Adidas</span>
        </label>
        <label className="sidebar-label-container">
          <input
            onChange={changeFilter}
            type="radio"
            value="Nike"
            name="company"
          />
          <span className="checkmark">Nike</span>
        </label>
      </div>
    </div>
  );
}

export default Filter;
