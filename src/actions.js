export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const REMOVECHILDREN = "REMOVECHILDREN";

//@todo: to implement nested items something
//  to change here
export const add = (parentId) => ({ type: ADD, payload: { parentId } });
export const remove = (itemId, parentId) => ({
  type: REMOVE,
  payload: { itemId, parentId },
});
export const removeMyChildren = (itemId) => ({
  type: REMOVECHILDREN,
  payload: { itemId },
});
