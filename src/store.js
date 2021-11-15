import { createStore } from "redux";
import { ADD } from "./actions";

const initialState = {
  //turn it into object, to make it less expensive when searching
  //Array.find is more expensive than obj[id]
  items: {
    root: { id: "root", children: [1, 2] },
    1: { id: 1, value: "root one", children: [] },
    2: { id: 2, value: "root two", children: [] },
  },
};

const createId = (state) =>
  Math.max(
    ...Object.keys(state.items)
      .map((key) => Number(key))
      .filter((key) => !isNaN(key))
  ) + 1;

const store = createStore(
  (state = initialState, { type, payload }) => {
    //@todo: implement adding or removing a child to
    //  tree

    if (type === ADD) {
      const { parentId } = payload;
      const id = createId(state);
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            id,
            children: [],
            value: `Id ${id}, Son of ${parentId}`,
          },
          [parentId]: {
            ...state.items[parentId],
            children: state.items[parentId].children.concat(id),
          },
        },
      };
    }
    if (type === "REMOVE") {
      const { parentId, itemId } = payload;
      const idsToRemove = state.items[itemId].children.concat(itemId);
      console.log(idsToRemove);
      const items = {
        ...state.items,
        [parentId]: {
          ...state.items[parentId],
          children: state.items[parentId].children.filter(
            (id) => id !== itemId
          ),
        },
      };
      return {
        ...state,
        items: Object.fromEntries(
          Object.entries(items).filter(
            ([key]) => !idsToRemove.includes(Number(key))
          )
        ),
      };
    }
    if (type === "REMOVECHILDREN") {
      const { itemId } = payload;
      const idsToRemove = state.items[itemId].children;
      const items = {
        ...state.items,
        [itemId]: {
          ...state.items[itemId],
          children: [],
        },
      };
      return {
        ...state,
        items: Object.fromEntries(
          Object.entries(items).filter(
            ([key]) => !idsToRemove.includes(Number(key))
          )
        ),
      };
    }

    return { ...state };
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
