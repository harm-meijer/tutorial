export const UP = "UP";
export const DOWN = "DOWN";
export const RESET = "RESET";
export const ADD = "ADD";
export const REMOVE = "REMOVE";
//@todo: to implement multiple counters something needs
//  to change here
export const up = () => ({ type: UP });
export const down = () => ({ type: DOWN });
export const reset = () => ({ type: RESET });
export const add = () => ({ type: ADD });
export const remove = () => ({ type: REMOVE });
