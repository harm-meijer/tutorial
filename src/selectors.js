import { createSelector } from "reselect";

export const selectItems = (state) => state.items;
const createSelectRawItemById = (itemId) =>
  createSelector([selectItems], (items) => items[itemId]);
export const createSelectItemById = (itemId) => {
  let lastItem;
  let lastValue;
  return createSelector(
    [createSelectRawItemById(itemId), selectItems],
    (item, items) => {
      if (lastItem === item) {
        return lastValue;
      }
      console.log("executing selector", item.id);
      lastValue = {
        ...item,
        children: item.children.map((id) => items[id]),
      };
      lastItem = item;
      return lastValue;
    }
  );
};
