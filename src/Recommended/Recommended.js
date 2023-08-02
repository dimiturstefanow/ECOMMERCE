import Buttons from "../components/Buttons";
import "./Recommended.css";

function Recommended() {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommened</h2>
        <div className="recommended-flex">
          <button className="btns">All Products</button>
          <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        </div>
      </div>
    </>
  );
}

export default Recommended;
