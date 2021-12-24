//data layer logic goes

export const initialState = {
  basket: [],
  user: null,
};

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
      return { state };
    default:
      return state;
  }
};

export default reducer;
