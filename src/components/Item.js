import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, toggleChildren } from "../actions";
import { createSelectItemWithValue } from "../selectors";

const Item = memo(function ItemComponent({ id, parentId }) {
  const item = useSelector(createSelectItemWithValue(id, parentId));
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add(id));
  const removeClicked = () => dispatch(remove(id, parentId));
  const hideClicked = () => dispatch(toggleChildren(id));

  const showChildren = item.showChildren;
  const hasChildren = item.children.length;

  return (
    <div>
      <button onClick={addClicked}>Add</button>
      <button onClick={removeClicked}>Remove</button>
      {item.value}
      {hasChildren > 0 && (
        <button onClick={hideClicked}>Toggle Children</button>
      )}
      <ul>
        {showChildren &&
          item.children.map((childId) => (
            <Item key={childId} id={childId} parentId={id} />
          ))}
      </ul>
    </div>
  );
});
export default Item;
