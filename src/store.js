import { createStore } from "redux";
import { ADD, DOWN, REMOVE, RESET, UP } from "./actions";
const initialState = {
  count: 0,
};

const store = createStore(
  (state = initialState, { type }) => {
    if (type === UP) {
      //@todo: implement up
    }
    if (type === DOWN) {
      //@todo: implement down
    }
    if (type === RESET) {
      //@todo: implement reset
    }
    if (type === ADD) {
      //@todo: implement adding a counter
    }
    if (type === REMOVE) {
      //@todo: implement removing a counter
    }
    return { ...state };
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
