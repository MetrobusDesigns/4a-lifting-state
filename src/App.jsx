import { useState } from "react";
import Celsius from "./components/Celsius";
import Fahrenheit from "./components/Fahrenheit";

function App() {
  // Lifting State
  // When you have a state that you need to share across multiple components, you can "lift the state" into their closest parent component and pass that state back down via props
  // this way, both components will have access to the same state, so any changes made in either component to that state will appear across the app
  const [temperature, setTemperature] = useState(0);
  const [scale, setScale] = useState("f"); // f or c

  // set the scale to f meaning we take in the value as is for Fahrenheit, but perform a conversion for Celsius
  const handleFahrenheit = (value) => {
    setTemperature(value);
    setScale("f");
  };

  const handleCelsius = (value) => {
    setTemperature(value);
    setScale("c");
  };

  return (
    <>
      <h1>4A - Lifting State</h1>
      <Fahrenheit
        temperature={temperature}
        handleTempChange={handleFahrenheit}
        scale={scale}
      />
      <Celsius
        temperature={temperature}
        handleTempChange={handleCelsius}
        scale={scale}
      />
    </>
  );
}

export default App;