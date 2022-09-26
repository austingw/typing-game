import { useState } from "react";

function App() {
  const [typed, setTyped] = useState();

  function handleChange(event) {
    setTyped(event.target.value);
    console.log(typed);
  }

  return (
    <div className="App">
      <h1>Speed Typing!</h1>
      <textarea onChange={handleChange} />
      <h4>Time Remaining: </h4>
      <button>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
