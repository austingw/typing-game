import { useEffect, useState, useRef } from "react";

function useGame() {
  const STARTING_TIME = 15;
  const textboxRef = useRef(null);

  const [typed, setTyped] = useState("");
  const [timer, setTimer] = useState(STARTING_TIME);
  const [start, setStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleChange(event) {
    setTyped(event.target.value);
  }

  function startGame() {
    setStart(true);
    setTyped("");
    setTimer(STARTING_TIME);
    setWordCount(0);
    textboxRef.current.disabled = false;
    textboxRef.current.focus();
  }

  function endGame() {
    setStart(false);
    setWordCount(calculateWordCount(typed));
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
      endGame();
    }
  }, [timer, start]);

  return {
    textboxRef,
    handleChange,
    typed,
    start,
    timer,
    startGame,
    wordCount,
  };
}

export default useGame;
