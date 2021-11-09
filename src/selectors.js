import { createSelector } from "reselect";

export const selectItems = (state) => state.items;
export const createSelectItemById = (itemId) =>
  createSelector([selectItems], (items) =>
    items.find(({ id }) => id === itemId)
  );
export const createSelectChildrenByParentId = (parentId) =>
  createSelector([selectItems], (items) =>
    items.filter(({ parent }) => parent === parentId)
  );
// itemId => state => item
