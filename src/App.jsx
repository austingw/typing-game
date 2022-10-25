import useGame from "./useGame";

function App() {
  const {
    textboxRef,
    handleChange,
    typed,
    start,
    timer,
    startGame,
    wordCount,
  } = useGame();

  return (
    <div className="App">
      <h1>Speed Typing!</h1>
      <textarea
        ref={textboxRef}
        onChange={handleChange}
        value={typed}
        disabled={!start}
      />
      <h4>Time Remaining: {timer} seconds</h4>
      <button onClick={startGame} disabled={start}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
