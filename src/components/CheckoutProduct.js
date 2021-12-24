import React from "react";
import "../css/CheckoutProduct.css";
import GradeIcon from "@mui/icons-material/Grade";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  //when removefrombasket fires, we take the id of that product to go into the store and find it and remove it.
  const removeFromBasket = () => {
    //dispatch the item we want to remove
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {/* whatever number is passed into as a rating, it will spit out that many stars */}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <GradeIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
