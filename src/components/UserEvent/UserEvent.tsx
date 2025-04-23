import { useState } from "react";

export default function UserEvent() {
  const [userInput, setUserInput] = useState<string>("");
  const [userCount, setUserCount] = useState<number>(0);
  return (
    <div>
      <div>
        <h1>Go ahead and type something: </h1>
        <h2>{userInput}</h2>
      </div>
      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      <br />
      <br />
      <h3>Counter: {userCount}</h3>
      <button onClick={() => setUserCount((count) => ++count)}>Increase</button>
      <button onClick={() => setUserCount(0)}>Reset</button>
    </div>
  );
}
