import { useEffect, useState } from "react";

function App() {
  const [typed, setTyped] = useState("");
  const [timer, setTimer] = useState(5);
  const [start, setStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(event) {
    setTyped(event.target.value);
  }

  function startGame() {
    setStart(true);
    setTyped("");
    setTimer(5);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (start && timer !== 0) {
      setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setStart(false);
      setWordCount(calculateWordCount(typed));
    }
  }, [timer, start]);

  return (
    <div className="App">
      <h1>Speed Typing!</h1>
      <textarea onChange={handleChange} value={typed} />
      <h4>Time Remaining: {timer} seconds</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
