import { useMemo } from "react";
import { useSelector } from "react-redux";
import Item from "./components/Item";
import { createSelectChildrenByParentId } from "./selectors";

function App() {
  const selectRootItems = useMemo(
    () => createSelectChildrenByParentId("none"),
    []
  );
  const rootItems = useSelector(selectRootItems);
  return (
    <ul>
      {rootItems.map(({ id }) => (
        <Item key={id} itemId={id} />
      ))}
    </ul>
  );
}

export default App;
