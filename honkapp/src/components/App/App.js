import "./App.css";
import React, { useState } from "react";
import { questionDataJS } from "../../QuestionData";
import { questionDataCSS } from "../../QuestionData";

function App() {
  const [category, setCategory] = useState(questionDataJS[1].image);

  function handleCategoryChange(event) {
    const value = event.target.value;
    if (value === "CSS") {
      setCategory(questionDataCSS[1].image);
    } else if (value === "JS") {
      setCategory(questionDataJS[1].image);
    }
  }

  return (
    <>
      <select name="difficulty" id="difficulty" onChange={handleCategoryChange}>
        <option value="CSS">CSS</option>
        <option value="JS">JS</option>
      </select>
      <img src={category} alt="test" />
      <div className="App">Test</div>
    </>
  );
}

export default App;
