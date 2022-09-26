import { useEffect, useState } from "react";

function App() {
  const [typed, setTyped] = useState("");
  const [timer, setTimer] = useState(5);

  function handleChange(event) {
    setTyped(event.target.value);
    console.log(typed);
  }

  function wordCount(text) {
    const wordsArr = text.trim().split(" ");
    const filterArr = wordsArr.filter((word) => word !== "").length;
    console.log(filterArr);
  }

  useEffect(() => {
    const countdown = setTimeout(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearTimeout(countdown);
    }
  }, [timer]);

  return (
    <div className="App">
      <h1>Speed Typing!</h1>
      <textarea onChange={handleChange} value={typed} />
      <h4>Time Remaining: {timer} seconds</h4>
      <button onClick={() => wordCount(typed)}>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
