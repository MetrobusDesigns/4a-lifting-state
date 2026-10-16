import { useState } from "react";

const Fahrenheit = ({ temperature, handleTempChange, scale }) => {
  //   const [fahrenheit, setFahrenheit] = useState(0);

  // derived state - any value that can calculated using an existing state.
  // rather than introduce a new state, you utilize the existing state for the calculation
  // here, if scale is not "f" (meaning it's "c"), we perform a calculation to convert the temperature (in C) to fahrenheit)
  const fahrenheit = scale === "f" ? temperature : (temperature * 9) / 5 + 32;

  return (
    <>
      <div>
        <label>Fahrenheit: </label>
        <input
          value={fahrenheit}
          onChange={(event) => handleTempChange(event.target.value)}
          type="number"
        />
      </div>
    </>
  );
};

export default Fahrenheit;