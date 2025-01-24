import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "dhruv",
    age: 21,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-white text-black rounded-md mb-5">Tailwind CSS</h1>
      <Card username="Dhruv" btnText="Visit me" />
      <Card username="Agrawal" btnText="Click me" />
      <Card username="Chai" />
    </>
  );
}

export default App;
