import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import "./card.css";

function Card({ img, title, star, reviews, price, discountPrice }) {
    return (
        <section className="card">
          <img src={img} alt={title} className="card-image" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
            {star}{star}{star}{star}{star}
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                {
                  discountPrice > 0 
                  ? <div><del>${price}</del><div>${discountPrice}</div></div>
                  : <div>${price}</div>
                }
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