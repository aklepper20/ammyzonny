import React from "react";
import Header from "../components/Header";
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
          <div>Your shopping cart is empty...</div>
        ) : (
          <div>
            <h2>Your Shopping Basket</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default CheckoutPage;
