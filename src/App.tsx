// import FruitList from "./components/FruitList/FruitList";
// import PrimaryButton from "./components/PrimaryButton";
// import Users from "./components/Users/User";

import UserEvent from "./components/UserEvent/UserEvent";
// import UserTable from "./components/UserTable/UserTable";

export const users = [
  { name: "John Doe", age: 28 },
  { name: "Jane Smith", age: 34 },
  { name: "Michael Johnson", age: 42 },
  { name: "Emily Davis", age: 25 },
  { name: "David Wilson", age: 30 },
  { name: "Sarah Brown", age: 29 },
];

function App() {
  return (
    <>
      {/* <h1>Hello world</h1>
      <PrimaryButton />
      <PrimaryButton action="delete" />
      <div>
        <Users />
      </div>
      <div>
        <FruitList fruits={["apple", "banana", "orange", "guava"]} />
      </div> */}
      {/* <UserTable users={users} /> */}
      <UserEvent />
    </>
  );
}

export default App;
