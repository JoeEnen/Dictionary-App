import React, { useState } from "react";
import "./searchBar.css";

function SearchBar({ setWord, fetchDefinition }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      setWord(input);
      fetchDefinition(input);
    }
  };

  return (
    <div className="searchArea">
      <input
        type="text"
        placeholder="Enter a word..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
