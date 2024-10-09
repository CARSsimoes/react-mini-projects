import React, { useState } from "react";
import SquareInputsRow from "./components/SquareInputsRow";

function Wordle() {
  const [currentWord, setCurrentWord] = useState("");
  const word = "Teste";

  return (
    <div>
      <p>Wordle</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <SquareInputsRow
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          word={word}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <SquareInputsRow
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          word={word}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <SquareInputsRow
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          word={word}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <SquareInputsRow
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          word={word}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <SquareInputsRow
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          word={word}
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <SquareInputsRow
          currentWord={currentWord}
          setCurrentWord={setCurrentWord}
          word={word}
        />
      </div>
      <p>The word was {word}</p>
    </div>
  );
}

export default Wordle;
