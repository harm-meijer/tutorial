import { useSelector } from "react-redux";
import Item from "./components/Item";
import { createSelectItemById } from "./selectors";
import { ROOT_ID } from "./constants";

function App() {
  const rootItem = useSelector(createSelectItemById(ROOT_ID));
  return (
    <div>
      <ul>
        {rootItem.children.map((itemId) => (
          <Item key={itemId} id={itemId} parentId={ROOT_ID} />
        ))}
      </ul>
    </div>
  );
}

export default App;
