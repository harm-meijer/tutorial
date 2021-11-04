import React from "react";
import { useSelector } from "react-redux";
import Item from "./components/Item";
import { createSelectItemById } from "./selectors";

function App() {
  const selectRootItems = React.useMemo(
    () => createSelectItemById("root"),
    []
  );
  const rootItem = useSelector(selectRootItems);
  return (
    <ul>
      {rootItem.children.map(({ id }) => (
        <Item key={id} id={id} />
      ))}
    </ul>
  );
}

export default App;
