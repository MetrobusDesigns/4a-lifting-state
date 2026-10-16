
import { useState } from "react";

const Celsius = ({ temperature, handleTempChange, scale }) => {
  //   const [celsius, setCelsius] = useState(0);

  const celsius = scale === "c" ? temperature : ((temperature - 32) * 5) / 9;

  return (
    <>
      <div>
        <label>Celsius: </label>
        <input
          value={celsius}
          onChange={(event) => handleTempChange(event.target.value)}
          type="number"
        />
      </div>
    </>
  );
};

export default Celsius;