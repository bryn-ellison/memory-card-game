import { useState } from "react";
import "./App.css";
import { CardDeck } from "./components/CardDeck";
import { Scoreboard } from "./components/Scoreboard";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const addScore = (currentScore) => {
    setScore(currentScore);
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
  };

  return (
    <div className="App">
      <h1 id="title">The Gang Tries to Remember</h1>
      <Scoreboard score={score} highScore={highScore} />
      <CardDeck addScore={addScore} />
    </div>
  );
}

export default App;
