import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setKeyword] = useState("");

  const handleResponse = (response) => {
    console.log(response.data.meanings[0]);
  };

  const search = (event) => {
    event.preventDefault();
    alert(`Searching for ${word} definition`);
    const apiKey = "b385d498dfa178bfc115dfc214tao005";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
