import React from "react";
import { useSelector } from "react-redux";
import Item from "./components/Item";
import { createSelectItemById } from "./selectors";

function App() {
  const rootItem = useSelector(
    createSelectItemById("root")
  );
  return (
    <ul>
      {rootItem.children.map((id) => (
        <Item key={id} itemId={id} parentId="root" />
      ))}
    </ul>
  );
}

export default App;
