//data layer logic goes

export const initialState = {
  basket: [],
  user: null,
};

//increment all of the price in the basket and returns it
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//saying when i get a new state, action is "add item to basket, remove item from basket"
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //Logic for adding item in basket. Whatever u dispatch here is what u need to return what the new data layer looks like
      //..state return how the state looked but ADD this new item we just dispatched
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //allow us to find the product, slice the array up then return the array back to the checkout page
      //copy the basket
      let newBasket = [...state.basket];

      //go through current basket array and check it against to match the dispatch action id of remove item we clicked on
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists in basket, we remove it
        //go to the point of the item we want to remove and cut it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id}), its not in basket`
        );
      }
      //set the state to be the newBasket array with the item chopped out of it
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
