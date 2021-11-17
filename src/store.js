import { createStore } from "redux";
import { ROOT_ID } from "./constants";
import { ADD, REMOVE } from "./actions";

const initialState = {
  items: {
    [ROOT_ID]: { id: ROOT_ID, children: [1, 2] },
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

/**export const getDecedents = (id, items) => {
  const recur = (acc) => (id) =>
    acc
      .concat(items[id].children)
      .concat(items[id].children.flatMap(recur(acc)));
  return recur([])(id);
};
*/
const removeItems = (removeId, items) => {
  const idsToRemove = [removeId].concat(getDecedents(removeId, items));
  console.log(idsToRemove);
  return Object.fromEntries(
    Object.entries(items).filter(([key]) => !idsToRemove.includes(Number(key)))
  );
};

const store = createStore(
  (state = initialState, { type, payload }) => {
    if (type === ADD) {
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
    if (type === REMOVE) {
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
    return { ...state };
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
