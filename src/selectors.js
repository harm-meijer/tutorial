import { createSelector } from "reselect";

export const selectItems = (state) => state.items;
export const createSelectItemById = (itemId) =>
  createSelector([selectItems], (items) => items[itemId]);
export const createSelectItemWithValue = (
  itemId,
  parentId
) =>
  createSelector(
    [createSelectItemById(itemId)],
    (item) => ({
      ...item,
      value: `parent:${parentId} - ${item.id}`,
    })
  );
export const createSelectTimerById = (id) =>
  createSelector(
    [createSelectItemById(id)],
    ({ start = false, stop = false }) => ({ start, stop })
  );
