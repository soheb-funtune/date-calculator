import { useState } from "react";
import AgeCalculator from "./components/age-calculator";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>App</h1>
      <AgeCalculator />
    </>
  );
}

export default App;
