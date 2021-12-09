export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const TOGGLE_CHILDREN = "TOGGLE_CHILDREN";
export const SET_TIMER = "SET_TIMER";

export const add = (parentId) => ({
  type: ADD,
  payload: parentId,
});
export const remove = (id, parentId) => ({
  type: REMOVE,
  payload: { id, parentId },
});
export const toggleChildren = (parentId) => ({
  type: TOGGLE_CHILDREN,
  payload: parentId,
});

//Action created to set the timer.
export const setTimerAction = (id, timer) => ({
  type: SET_TIMER,
  payload: { id, timer },
});
