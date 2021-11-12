import { useMemo } from "react";
import { useSelector } from "react-redux";
import Item from "./components/Item";
import { createSelectItemById, selectItem } from "./selectors";

function App() {
  //@todo: select root items and display tree
  //If ou use like this, it wil create the selector every time:
  // const rootItems = createSelectItemById ('root')
  //Insted, for memoization it's possible to use a hook, like this:

  const selectRootItem = useMemo(() => createSelectItemById("root"), []);

  const rootItem = useSelector(selectRootItem);
  return (
    <div>
      {rootItem.children.map(({ id }) => (
        <Item key={id} itemId={id} />
      ))}
    </div>
  );
}

export default App;
