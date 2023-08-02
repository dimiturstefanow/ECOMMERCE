import { useState } from "react";
import Buttons from "../components/Buttons";
import "./Recommended.css";

function Recommended() {
  const [selectedCategory, setSelectedCategory] = useState(null); // Initialize selectedCategory as null

  const handleClick = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        {/* Pass isSelected prop to indicate whether the button is selected */}
        <Buttons
          onClickHandler={() => handleClick(null)}
          value=""
          title="All Products"
          isSelected={selectedCategory === null}
        />
        <Buttons
          onClickHandler={() => handleClick("Nike")}
          value="Nike"
          title="Nike"
          isSelected={selectedCategory === "Nike"}
        />
        <Buttons
          onClickHandler={() => handleClick("Adidas")}
          value="Adidas"
          title="Adidas"
          isSelected={selectedCategory === "Adidas"}
        />
      </div>
    </div>
  );
}

export default Recommended;
