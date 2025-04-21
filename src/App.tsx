import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";
import Users from "./components/Users/User";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <PrimaryButton />
      <PrimaryButton action="delete" />
      <div>
        <Users />
      </div>
      <div>
        <FruitList fruits={["apple", "banana", "orange", "guava"]} />
      </div>
    </>
  );
}

export default App;
