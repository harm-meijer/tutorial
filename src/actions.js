export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const add = (parentId) => ({ type: ADD, payload: parentId });
export const remove = (itemId, parentId) => ({
  type: REMOVE,
  payload: { itemId, parentId },
});
