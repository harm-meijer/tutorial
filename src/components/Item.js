import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../actions";
import { selectItem } from "../selectors";

const Item = memo(function ItemComponent() {
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add());
  const removeClicked = () => dispatch(remove());
  return (
    <div>
      <button onClick={addClicked}>up</button>
      <button onClick={removeClicked}>down</button>
      {/* @todo: show child items */}
    </div>
  );
});
export default Item;
