import React, { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, removeMyChildren } from "../actions";
import { createSelectItemById } from "../selectors";

const Item = memo(function ItemComponent({ itemId, parentId }) {
  console.log("Rendering item ", itemId);
  const selectItemById = useMemo(() => createSelectItemById(itemId), [itemId]);
  const item = useSelector(selectItemById);
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add(itemId));
  const removeClicked = () => dispatch(remove(itemId, parentId));
  const removeMyChildrenClicked = () => dispatch(removeMyChildren(itemId));
  return (
    <li>
      <button onClick={addClicked}>Add Child</button>
      <button onClick={removeClicked}>Remove Item</button>
      <button onClick={removeMyChildrenClicked}>Remove Children</button>
      {/* @todo: show child items */}
      {item.value}
      <ul>
        {item.children.map(({ id }) => (
          <Item key={id} itemId={id} parentId={itemId} />
        ))}
      </ul>
    </li>
  );
});
export default Item;
