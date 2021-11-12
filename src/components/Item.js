import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../actions";
import { createSelectItemById } from "../selectors";

const Item = memo(function ItemComponent({
  itemId,
  parentId,
}) {
  console.log(`Item ${itemId} returning jsx`);
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add(itemId));
  const item = useSelector(createSelectItemById(itemId));
  const removeClicked = () =>
    dispatch(remove(itemId, parentId));
  return (
    <li>
      <button onClick={addClicked}>Add</button>
      <button onClick={removeClicked}>Remove</button>
      {item.value}
      <ul>
        {item.children.map((id) => (
          <Item key={id} itemId={id} parentId={itemId} />
        ))}
      </ul>
    </li>
  );
});
export default Item;
