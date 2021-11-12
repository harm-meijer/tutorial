import { createSelector } from "reselect";

export const selectItems = (state) => state.items;
export const createSelectItemById = (itemId) =>
  createSelector([selectItems], (items) => items[itemId]);
