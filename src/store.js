import { createStore } from "redux";
import { ADD, remove, REMOVE } from "./actions";
const initialState = {
  items: {
    root: {
      id: "root",
      value: "root",
      children: [1, 2],
    },
    1: {
      id: 1,
      parentId: "root",
      value: "1 - parent: root",
      children: [],
    },
    2: {
      id: 2,
      parentId: "root",
      value: "2 - parent: root",
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
const store = createStore(
  (state = initialState, { type, payload }) => {
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
            parentId,
            children: [],
          },
        },
      };
    }
    if (type === REMOVE) {
      const { id: removeId, parentId } = payload;
      const { [removeId]: gone, ...rest } = state.items;
      return {
        ...state,
        items: {
          ...rest,
          [parentId]: {
            ...rest[parentId],
            children: rest[parentId].children.filter(
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
