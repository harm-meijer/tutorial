import { createStore } from "redux";
import { ADD, REMOVE, TOGGLE_CHILDREN, SET_TIMER } from "./actions";
const initialState = {
  items: {
    root: {
      id: "root",
      value: "root",
      showChildren: true,
      children: [1],
    },
    1: {
      id: 1,
      value: "1 - parent: root",
      showChildren: true,
      children: [2],
    },
    2: {
      id: 2,
      value: "2 - parent: 1",
      showChildren: true,
      children: [3],
    },
    3: {
      id: 3,
      value: "3 - parent: 2",
      showChildren: true,
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
  const idsToRemove = [removeId].concat(getDecedents(removeId, items));
  return Object.fromEntries(
    Object.entries(items).filter(([key]) => !idsToRemove.includes(Number(key)))
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
            children: state.items[parentId].children.concat(id),
          },
          [id]: {
            id,
            value: `${id} - parent: ${parentId}`,
            showChildren: true,
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
            children: items[parentId].children.filter((id) => id !== removeId),
          },
        },
      };
    }
    if (type === TOGGLE_CHILDREN) {
      const id = payload;
      const showChildren = !state.items[id].showChildren;
      const items = {
        ...state.items,
        [id]: {
          ...state.items[id],
          showChildren,
        },
      };
      return { ...state, items };
    }
    //changes on the store to get the timer and store it on redux state.
    if (type === SET_TIMER) {
      const { id, timer } = payload;
      console.log("set timer action ", id);
      console.log("set timer action ", timer);
      const items = {
        ...state.items,
        [id]: {
          ...state.items[id],
          start: timer.start,
          stop: timer.stop,
        },
      };
      return { ...state, items };
    }
    return { ...state };
  },
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
