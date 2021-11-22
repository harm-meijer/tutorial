import Item from "./components/Item";
import { useSelector } from "react-redux";
import { createSelectItemById } from "./selectors";

function App() {
  const rootItem = useSelector(createSelectItemById("root"));
  return (
    <div>
      <ul>
        {rootItem.children.map((itemId) => (
          <Item key={itemId} id={itemId} parentId={"root"} />
        ))}
      </ul>
    </div>
  );
}

export default App;
