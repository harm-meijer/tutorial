import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggleChildren } from "../actions";
import { createSelectItemWithValue } from "../selectors";
import AutoCounter from "./AutoCounter";

const Item = memo(function ItemComponent({ itemId, parentId }) {
  console.log(`Item ${itemId} returning jsx`);
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add(itemId));
  const item = useSelector(createSelectItemWithValue(itemId, parentId));
  const removeClicked = () => dispatch(remove(itemId, parentId));
  const hideClicked = () => dispatch(toggleChildren(itemId));
  return (
    <li>
      <button onClick={addClicked}>Add</button>
      <button onClick={removeClicked}>Remove</button>
      {item.value}
      <AutoCounter itemId={itemId} />
      {Boolean(item.children.length) && (
        <button onClick={hideClicked}>{item.showChildren ? "-" : "+"}</button>
      )}
      {item.showChildren && item.children.length ? (
        <ul>
          {item.children.map((id) => (
            <Item key={id} itemId={id} parentId={itemId} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </li>
  );
});
export default Item;
