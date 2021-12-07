export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const TOGGLE_CHILDREN = "TOGGLE_CHILDREN";

export const add = (parentId) => ({ type: ADD, payload: parentId });
export const remove = (itemId, parentId) => ({
  type: REMOVE,
  payload: { itemId, parentId },
});
export const toggleChildren = (parentId) => ({
  type: TOGGLE_CHILDREN,
  payload: parentId,
});
