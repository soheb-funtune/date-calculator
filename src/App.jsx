import { useState } from "react";
import AgeCalculator from "./components/age-calculator";
import "./App.css";
import Zakat from "./components/zakat-cal/zakat";
import Card from "./components/card/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>App</h1> */}
      <div className="flex">
        <Card heading={"Zakat Calculator"} bgClass="zakat">
          <Zakat />
        </Card>
        <Card heading={"Age Calculator"} bgClass="age">
          <AgeCalculator />
        </Card>
      </div>
    </>
  );
}

export default App;
