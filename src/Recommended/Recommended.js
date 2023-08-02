import { useState } from "react";
import Buttons from "../components/Buttons";
import "./Recommended.css";

function Recommended() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleClick = (value) => {
    setSelectedCategory(value);
  };

  return (
    <>
      <div>
        <h2 className="recommended-title">Recommened</h2>
        <div className="recommended-flex">
        <Buttons onClickHandler={() => handleClick("Nike")} value="" title="All Products" />
          <Buttons onClickHandler={() => handleClick("Nike")} value="Nike" title="Nike" />
          <Buttons onClickHandler={() => handleClick("Adidas")} value="Adidas" title="Adidas" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
