import { createStore } from "redux";
import { ADD, REMOVE } from "./actions";
const initialState = {
  items: {
    root: {
      id: "root",
      value: "root",
      children: [1],
    },
    1: {
      id: 1,
      value: "1 - parent: root",
      children: [2],
    },
    2: {
      id: 2,
      value: "2 - parent: 1",
      children: [3],
    },
    3: {
      id: 3,
      value: "3 - parent: 2",
      children: [],
    },
  },
};
const createId = (state) =>
  Math.max(
    ...Object.keys(state.items)
      .map((key) => Number(key))
      .filter((id) => !isNaN(id))
  ) + 1;
export const getDecedents = (id, items) => {
  const recur = (acc) => (id) =>
    acc
      .concat(items[id].children)
      .concat(items[id].children.flatMap(recur(acc)));
  return recur([])(id);
};
const removeItems = (removeId, items) => {
  const idsToRemove = [removeId].concat(
    getDecedents(removeId, items)
  );
  return Object.fromEntries(
    Object.entries(items).filter(
      ([key]) => !idsToRemove.includes(Number(key))
    )
  );
};
const store = createStore(
  (state = initialState, { type, payload }) => {
    // console.log("working?", getDecedents(2, state.items));
    if (type === ADD) {
      const parentId = payload;
      const id = createId(state);
      return {
        ...state,
        items: {
          ...state.items,
          [parentId]: {
            ...state.items[parentId],
            children:
              state.items[parentId].children.concat(id),
          },
          [id]: {
            id,
            value: `${id} - parent: ${parentId}`,
            children: [],
          },
        },
      };
    }
    if (type === REMOVE) {
      const { id: removeId, parentId } = payload;
      const items = removeItems(removeId, state.items);
      return {
        ...state,
        items: {
          ...items,
          [parentId]: {
            ...items[parentId],
            children: items[parentId].children.filter(
              (id) => id !== removeId
            ),
          },
        },
      };
    }
    return { ...state };
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
