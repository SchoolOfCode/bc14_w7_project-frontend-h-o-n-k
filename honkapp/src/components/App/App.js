import "./App.css";
import React, { useState } from "react";
import { questionDataJS } from "../../QuestionData";
import { questionDataCSS } from "../../QuestionData";

function App() {
  const [categoryQ, setCategoryQ] = useState("hey");

  // const [categoryImg, setCategoryImg] = useState(questionDataJS[1].image);
  // Q1 is index 0, Q2 is index 1, Q3 is index 2

  function handleCategoryChange(event) {
    const value = event.target.value;
    if (value === "CSS") {
      setCategoryQ(questionDataCSS[Math.floor(Math.random() * 3)].question);
    } else if (value === "JS") {
      setCategoryQ(questionDataJS[Math.floor(Math.random() * 3)].question);
    }
  }

  return (
    <>
      <select name="category" id="category" onChange={handleCategoryChange}>
        <option selected disabled>
          Select a category
        </option>
        <option value="JS">JS</option>
        <option value="CSS">CSS</option>
      </select>
      <h2>{categoryQ}</h2>
      <div className="App"></div>
    </>
  );
}

export default App;
