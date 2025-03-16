import "./index.css";
import React, { useState } from "react";
import SearchBar from "../src/Components/searchBar";
import WordDefinition from "../src/Components/definition";
import DicImage from "./assets/dictionary.jpg";

function App() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState("");

  const fetchDefinition = async (searchWord) => {
    setError("");
    setDefinition(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      if (!response.ok) throw new Error("Word not found!");

      const data = await response.json();
      setDefinition(data[0]);
    } catch (error) {
      setError("Word not found! Please try another.");
    }
  };

  return (
    <div className="dictionary-container">
      <div className="header">
        <h1>Free English Dictionary</h1>
      </div>
      <SearchBar setWord={setWord} fetchDefinition={fetchDefinition} />
      <div className="sub">
        <div className="Dictionary">
          <img src={DicImage} alt="image" />
        </div>
        <div className="actionArea">
          {error && <p className="error">{error}</p>}
          {definition && <WordDefinition data={definition} />}
        </div>
      </div>
      <div className="footer">
        <h1>Developed with &hearts; by Joseph Ndungu</h1>
      </div>
    </div>
  );
}

export default App;
