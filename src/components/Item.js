import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../actions";
import { createSelectItemById } from "../selectors";

const Item = memo(function ItemComponent({ id, parentId }) {
  const item = useSelector(createSelectItemById(id, parentId));
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add(id));
  const removeClicked = () => dispatch(remove(id, parentId));
  console.log(id, item);
  return (
    <div>
      <button onClick={addClicked}>Add</button>
      <button onClick={removeClicked}>Remove</button>
      {/* @todo: implement value in selector */}
      {item.value}
      <ul>
        {item.children.map((childId) => (
          <Item key={childId} id={childId} parentId={id} />
        ))}
      </ul>
    </div>
  );
});
export default Item;
