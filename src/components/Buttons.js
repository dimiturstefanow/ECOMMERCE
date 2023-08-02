import React from "react";

function Buttons({ onClickHandler, value, title, isSelected }) {
  const buttonClassName = isSelected ? "btns selected" : "btns"; // Add "selected" class when the button is selected

  return (
    <button onClick={onClickHandler} value={value} className={buttonClassName}>
      {title}
    </button>
  );
}

export default Buttons;
