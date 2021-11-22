export const ADD = "ADD";
export const REMOVE = "REMOVE";
//@todo: to implement nested items something
//  to change here
export const add = (parentId) => ({ type: ADD, payload: parentId });
export const remove = (itemId, parentId) => ({
  type: REMOVE,
  payload: { itemId, parentId },
});
