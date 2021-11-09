import { ADD, REMOVE } from "./actions";

const initialState = {
  items: [
    { id: 1, value: "1 - root", parent: "none" },
    { id: 2, value: "2 - root", parent: "none" },
    { id: 3, value: "3 - 1", parent: 1 },
  ],
};
const createId = (state) =>
  Math.max(...state.items.map(({ id }) => id)) + 1;

const reducer = (
  state = initialState,
  { type, payload }
) => {
  if (type === ADD) {
    const { parentId: parent } = payload;
    const id = createId(state);
    return {
      ...state,
      items: state.items.concat({
        id,
        value: `${id} - ${parent}`,
        parent,
      }),
    };
  }
  if (type === REMOVE) {
    const { itemId } = payload;
    return {
      ...state,
      items: state.items.filter(
        ({ id, parent }) =>
          id !== itemId && parent !== itemId
      ),
    };
  }
  return { ...state };
};
export default reducer;
