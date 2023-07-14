import { createStore } from "redux";
// import { products } from "../data.json";

const reducer = function (state = { allProducts: [], counter: 0 }, action) {
  switch (action.type) {
    case "":
      return;

    default:
      return { state };
  }
};

let store = createStore(reducer);

export default store;
