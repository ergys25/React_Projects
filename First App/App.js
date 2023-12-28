import { useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>Advice App</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <h2>{advice}</h2>
    </div>
  );
} // end App
