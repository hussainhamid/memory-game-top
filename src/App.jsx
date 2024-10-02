import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import DisplayScore from "./components/displayScore";
import "/src/styles.css";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScore = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;

        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });
    } else {
      setScore(0);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <DisplayScore score={score} h2={"Pokemon"} bestScore={bestScore} />
      </header>

      <div className="pokemon-container">
        <Card handleScore={handleScore} />
      </div>
    </div>
  );
}

export default App;
