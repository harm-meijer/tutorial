import React, { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../actions";
import {
  createSelectChildrenByParentId,
  createSelectItemById,
} from "../selectors";
const Item = memo(function ItemComponent({ itemId }) {
  const dispatch = useDispatch();
  const selectItem = useMemo(
    () => createSelectItemById(itemId),
    [itemId]
  );
  const selectChildren = useMemo(
    () => createSelectChildrenByParentId(itemId),
    [itemId]
  );

  const item = useSelector(selectItem);
  const children = useSelector(selectChildren);

  const addClicked = () => dispatch(add(itemId));
  const removeClicked = () => dispatch(remove(itemId));
  return (
    <li>
      {item.value}
      <button onClick={addClicked}>Add</button>
      <button onClick={removeClicked}>Remove</button>
      <ul>
        {children.map(({ id }) => (
          <Item key={id} itemId={id} />
        ))}
      </ul>
    </li>
  );
});
export default Item;
