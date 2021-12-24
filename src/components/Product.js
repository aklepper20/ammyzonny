import React from "react";
import "../css/Product.css";
import GradeIcon from "@mui/icons-material/Grade";
function Product({ id, title, price, rating, image }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="producer__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* whatever number is passed into as a rating, it will spit out that many stars */}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <GradeIcon />
              </p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
