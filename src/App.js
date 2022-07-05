import "./App.css";
import Pin from "./Components/Pin";
import { useState } from "react";

function App() {
  const [pinInput, setPinInput] = useState("");
  return (
    <div className="App">
      <Pin
        length={4}
        setPinInput={setPinInput}
      ></Pin>
      <h3>OTP value is{pinInput}</h3>
    </div>
  );
}

export default App;
