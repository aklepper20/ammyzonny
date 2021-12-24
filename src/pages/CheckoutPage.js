import React from "react";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import "../css/Checkout.css";
function CheckoutPage() {
  //we arent adding or shooting off a dispatch so we dont need the dispatch parameter
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <div className="checkout">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Advertisment Image"
        />
        {/* if theres nothing in my basket, show me this html. Else render the html showing all items in the cart */}
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping cart is empty...</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div className="checkout__title">
            <h2>Your Shopping Basket</h2>
            {/* List out all, or map all of the checkout products */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CheckoutPage;
