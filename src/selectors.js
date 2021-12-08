import { createSelector } from "reselect";

export const selectItems = (state) => state.items;

export const createSelectItemById = (id) =>
  createSelector([selectItems], (items) => items[id]);
export const createSelectItemWithValue = (id, parentId) =>
  console.log("creating selector for", id) ||
  createSelector([createSelectItemById(id)], (item) => ({
    ...item,
    value: `id: ${id} parent: ${parentId}`, //"id: parent: parentId"
  }));
