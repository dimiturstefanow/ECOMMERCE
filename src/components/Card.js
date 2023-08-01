import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-image" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <AiFillStar className="ratings-start" />
          <AiFillStar className="ratings-start" />
          <AiFillStar className="ratings-start" />
          <AiFillStar className="ratings-start" />
          <AiFillStar className="ratings-start" />
          <span className="total-reviews">5</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>$200</del>$150
          </div>
          <div className="favorite">
            <AiOutlineStar className="favorite-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
