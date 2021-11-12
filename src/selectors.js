//@tip: this needs to be a selector with a parameter

import { createSelector } from "reselect";

const selectItems = (state) => state.items;

//createSelectItembyId passes the id, gets all the items
export const createSelectItemById = (id) =>
  createSelector([selectItems], (items) => {
    return {
      //copy the item itself
      ...items[id],
      //gets the child object
      children: items[id].children.map((id) => items[id]),
    };
  });

export const selectItem = (state) => {
  //@todo: implement selector
};
