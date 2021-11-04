import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../actions";
import { createSelectItemById } from "../selectors";

const Item = memo(function ItemComponent({ id }) {
  console.log(`Item ${id} returning jsx`);
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add(id));
  const selectItem = React.useMemo(
    () => createSelectItemById(id),
    [id]
  );
  const item = useSelector(selectItem);
  const removeClicked = () =>
    dispatch(remove(item.id, item.parentId));
  return (
    <li>
      <button onClick={addClicked}>Add</button>
      <button onClick={removeClicked}>Remove</button>
      {item.value}
      <ul>
        {item.children.map(({ id }) => (
          <Item key={id} id={id} />
        ))}
      </ul>
    </li>
  );
});
export default Item;
