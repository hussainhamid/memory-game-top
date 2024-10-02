import { useState, useEffect } from "react";
import "./App.css";
import FetchPokemonData from "./components/fetchPokemonData";
import Card from "./components/card";
import DisplayScore from "./components/displayScore";

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
        <h1>Pokemon</h1>
        <DisplayScore score={score} bestScore={bestScore} />
      </header>

      <div className="pokemon-container">
        <Card handleScore={handleScore} />
      </div>
    </div>
  );
}

export default App;
