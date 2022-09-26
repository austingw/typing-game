import { useEffect, useState } from "react";

function App() {
  const [typed, setTyped] = useState("");
  const [timer, setTimer] = useState(5);
  const [start, setStart] = useState(false);

  function handleChange(event) {
    setTyped(event.target.value);
    console.log(typed);
  }

  function startGame() {
    setStart(true);
    setTyped("");
  }

  function wordCount(text) {
    const wordsArr = text.trim().split(" ");
    const filterArr = wordsArr.filter((word) => word !== "").length;

    if (timer === 0) {
      return filterArr;
    }
  }

  useEffect(() => {
    if (start && timer !== 0) {
      setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setStart(false);
    }
  }, [timer, start]);

  return (
    <div className="App">
      <h1>Speed Typing!</h1>
      <textarea onChange={handleChange} value={typed} />
      <h4>Time Remaining: {timer} seconds</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word Count: {wordCount(typed)}</h1>
    </div>
  );
}

export default App;
