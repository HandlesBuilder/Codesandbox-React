import React from "react";
import { debounce, throttle } from "./utils";

export default function App() {
  const handleDebounce = debounce((e) => {
    console.log(e.target.value);
  }, 1000);
  const handleThrottle = throttle((e) => {
    console.log("X:", e.nativeEvent.offsetX, "Y:", e.nativeEvent.offsetY);
  }, 1000);
  return (
    <div className="App">
      <div>
        <label htmlFor="debounce">debounce</label>
        <input id="debounce" onChange={handleDebounce} />
      </div>
      <div>
        <label htmlFor="throttle">throttle</label>
        <div className="mouseover-div" onMouseMove={handleThrottle} />
      </div>
    </div>
  );
}
