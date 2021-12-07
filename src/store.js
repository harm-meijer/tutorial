import { createStore, compose, applyMiddleware } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  items: {
    root: { id: "root", showChildren: true, children: [1, 2] },
    //Initial state should have true for showChildren when the children Array is not empty.
    1: { id: 1, showChildren: true, children: [3] },
    //Initial state should have false for showChildren when the children Array is empty.
    2: { id: 2, showChildren: false, children: [] },
    3: { id: 3, showChildren: false, children: [] },
  },
};

const createId = (items) =>
  Math.max(
    ...Object.keys(items)
      .map((key) => Number(key))
      .filter((id) => !isNaN(id))
  ) + 1;

const removeItems = (itemId, items) => {
  const idsToRemove = [itemId].concat(getDecedents(itemId, items));
  console.log(idsToRemove);
  return Object.fromEntries(
    Object.entries(items).filter(([key]) => !idsToRemove.includes(Number(key)))
  );
};

export const getDecedents = (id, items) => {
  const recur = (acc, id) => {
    acc.push(...items[id].children);
    items[id].children.forEach((childId) => {
      recur(acc, childId);
    });
    return acc;
  };
  return recur([], id);
};

const store = createStore(
  (state = initialState, { type, payload }) => {
    if (type === "ADD") {
      const parentId = payload;
      const id = createId(state.items);
      return {
        ...state,
        items: {
          ...state.items,
          [parentId]: {
            ...state.items[parentId],
            children: state.items[parentId].children.concat(id),
            //By default, if you add a children, parent's showChildren is true.
            showChildren: true,
          },
          [id]: {
            id,
            //By default, if you're a new node you don't have a child, showChildren is false
            showChildren: false,
            children: [],
          },
        },
      };
    }
    if (type === "REMOVE") {
      const { itemId, parentId } = payload;
      const items = {
        ...removeItems(itemId, state.items),
        [parentId]: {
          ...state.items[parentId],
          children: state.items[parentId].children.filter(
            (id) => id !== itemId
          ),
        },
      };
      return {
        ...state,
        items,
      };
    }
    if (type === "TOGGLE_CHILDREN") {
      const parentId = payload;
      const items = {
        ...state.items,
        [parentId]: {
          ...state.items[parentId],
          showChildren: !state.items[parentId].showChildren,
        },
      };
      return { ...state, items };
    }
    return state;
  },
  initialState,
  composeEnhancers(
    applyMiddleware(({ getState, dispatch }) => (next) => (action) => {
      if (!["loading", "loaded"].includes(action.type)) {
        dispatch({ type: "loading" });
        //do async stuff
        Promise.resolve().then(() =>
          dispatch({ type: "loaded", payload: "some data" })
        );
      }
      return next(action);
    })
  )
);

export default store;
