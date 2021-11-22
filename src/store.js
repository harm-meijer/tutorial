import { createStore, compose, applyMiddleware } from "redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  items: {
    root: { id: "root", children: [1, 2] },
    1: { id: 1, children: [3] },
    2: { id: 2, children: [] },
    3: { id: 3, children: [] },
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
    //@todo: implement adding or removing a child to
    //  tree
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
          },
          [id]: {
            id,
            children: [],
          },
        },
      };
    }
    if (type === "REMOVE") {
      const { itemId, parentId } = payload;
      console.log(`item to be removed: ${itemId}, parent id: ${parentId}`);
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
