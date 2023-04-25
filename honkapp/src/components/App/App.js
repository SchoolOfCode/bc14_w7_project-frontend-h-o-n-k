import "./App.css";
import React, { useState } from "react";
import { questionDataJS } from "../../QuestionData";
import { questionDataCSS } from "../../QuestionData";

function App() {
  const [categoryQ, setCategoryQ] = useState("hey");
const randomNumber = (Math.floor(Math.random() * 3))
    const [answer, setAnswer] = useState(" ") 
    
  // const [categoryImg, setCategoryImg] = useState(questionDataJS[1].image);
  // Q1 is index 0, Q2 is index 1, Q3 is index 2

  function handleCategoryChange(event) {
    const value = event.target.value;


    if (value === "CSS") {
      setCategoryQ(questionDataCSS[randomNumber].question);
      setAnswer (questionDataCSS[randomNumber].answer);
      
    } else if (value === "JS") {
      setCategoryQ(questionDataJS[randomNumber].question);
    }
  }

function handleChoice1() {
let userAnswer = questionDataCSS[randomNumber].choice1;
checkAnswer(userAnswer);
}

function checkAnswer() {  

// assign a value to userAnswer from one of the 4 choice buttons 
// compare choice of button vs QuestionData.js answer 
// send alert to user if answer is right 

if (questionDataCSS[randomNumber].choice1 === answer) {
  alert ("well done")
}}



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
      <button onClick = {handleChoice1} >{questionDataCSS[randomNumber].choice1}</button>
      <button>{questionDataCSS[randomNumber].choice2}  </button>
      <button>{questionDataCSS[randomNumber].choice3}  </button>
      <button>{questionDataCSS[randomNumber].choice4}  </button>
      <h4> {randomNumber} </h4>
      <div className="App"></div>
    </>
  );
}
// to be a button component 
export default App;
