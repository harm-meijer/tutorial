import { useDispatch } from "react-redux";
import { add } from "./actions";
import Counter from "./components/Counter";

function App() {
  const dispatch = useDispatch();
  const addClicked = () => dispatch(add());
  return (
    <div>
      <button onClick={addClicked}>Add Counter</button>
      <hr />
      {/* @todo: display a list of counters */}
    </div>
  );
}

export default App;
