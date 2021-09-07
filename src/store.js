import { createStore } from "redux";
const initialState = {
  items: [
    { id: 1, value: "root one" },
    { id: 2, value: "root two" },
    { id: 3, value: "Child of one", parent: 1 },
  ],
};

const store = createStore(
  (state = initialState, { type }) => {
    //@todo: implement adding or removing a child to
    //  tree
    return { ...state };
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
