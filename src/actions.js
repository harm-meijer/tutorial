export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const add = (parentId) => ({
  type: ADD,
  payload: { parentId },
});
export const remove = (itemId) => ({
  type: REMOVE,
  payload: { itemId },
});
