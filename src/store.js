import { createStore } from "redux";

const initialState = {
  //turn it into object, to make it less expensive when searching
  //Array.find is more expensive than obj[id]
  items: {
    root: { id: "root", children: [1, 2] },
    1: { id: 1, value: "root one", children: [] },
    2: { id: 2, value: "root two", children: [] },
  },
};

const store = createStore(
  (state = initialState, { type }) => {
    //@todo: implement adding or removing a child to
    //  tree
    return { ...state };
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
