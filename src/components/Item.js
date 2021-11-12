import React, { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../actions";
import { createSelectItemById } from "../selectors";

const Item = memo(function ItemComponent({ itemId }) {
  const selectItemById = useMemo(() => createSelectItemById(itemId), [itemId]);
  const item = useSelector(selectItemById);
  console.log(item.value);
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add());
  const removeClicked = () => dispatch(remove());
  return (
    <div>
      <button onClick={addClicked}>up</button>
      <button onClick={removeClicked}>down</button>
      {/* @todo: show child items */}
      {item.value}
    </div>
  );
});
export default Item;
