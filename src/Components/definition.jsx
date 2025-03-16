import React from "react";
import "./definition.css";

function WordDefinition({ data }) {
  return (
    <div className="definitionMain">
      <div className="scar">
        <h2>{data.word}</h2>
        <p>
          <strong>Phonetic:</strong> {data.phonetic || "N/A"}
        </p>

        {data.meanings.map((meaning, index) => (
          <div key={index}>
            <p>
              <strong>Part of Speech:</strong> {meaning.partOfSpeech}
            </p>
            <p>
              <strong>Definition:</strong> {meaning.definitions[0].definition}
            </p>
            {meaning.definitions[0].example && (
              <p>
                <strong>Example:</strong> {meaning.definitions[0].example}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordDefinition;
