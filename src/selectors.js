//@tip: this needs to be a selector with a parameter

import { createSelector } from "reselect";

const selectItems = (state) => state.items;

//createSelectItembyId passes the id, gets all the items
export const createSelectItemById = (id) => {
  let lastItem;
  let lastResult;

  return createSelector([selectItems], (items) => {
    if (lastItem === items[id]) {
      return lastResult;
    }

    lastItem = items[id];

    lastResult = {
      ...items[id],
      children: items[id].children.map((id) => items[id]),
    };

    return lastResult;
  });
};

export const selectItem = (state) => {
  //@todo: implement selector
};
