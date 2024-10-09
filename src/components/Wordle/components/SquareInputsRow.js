import React, { useState } from "react";

function SquareInputsRow({ currentWord, setCurrentWord, word }) {
  const [letters, setLetters] = useState([]);
  const [result, setResult] = useState(null);

  const evaluateRowWord = () => {
    if (letters.length === 5) {
      const userWord = letters.join("").toLowerCase();
      const isCorrect = userWord === word.toLowerCase();
      setResult(isCorrect ? "win" : "lost");
    }
  };

  const createWord = (e, index) => {
    const newLetters = [...letters];
    newLetters[index] = e.target.value;
    setLetters(newLetters);
    console.log(newLetters);
  };
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {[...Array(5)].map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          style={{
            width: "50px",
            height: "50px",
            textAlign: "center",
          }}
          onChange={(e) => createWord(e, index)}
          value={letters[index]}
        />
      ))}
      <button onClick={evaluateRowWord}>check</button>
      {result !== null && <p>{result}</p>}
    </div>
  );
}

export default SquareInputsRow;
