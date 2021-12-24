import React from "react";
import "../css/Product.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  //push into the basket array.
  //it dispatches an action with infomation and we listen to that action using the reducer
  //pulling all the data of the item added dispatching to the reducer
  const addToBasket = () => {
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
