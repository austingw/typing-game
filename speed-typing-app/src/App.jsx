import { useState } from "react";

function App() {
  const [typed, setTyped] = useState("");

  function handleChange(event) {
    setTyped(event.target.value);
    console.log(typed);
  }

  function wordCount(text) {
    const wordsArr = text.trim().split(" ");
    const filterArr = wordsArr.filter((word) => word !== "").length;
    console.log(filterArr);
  }

  return (
    <div className="App">
      <h1>Speed Typing!</h1>
      <textarea onChange={handleChange} value={typed} />
      <h4>Time Remaining: </h4>
      <button onClick={() => wordCount(typed)}>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
