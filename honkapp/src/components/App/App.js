import "./App.css";
import React, { useState } from "react";
import { questionDataJS } from "../../QuestionData";
import { questionDataCSS } from "../../QuestionData";

function App() {
  const [categoryQ, setCategoryQ] = useState("hey");
  const randomNumber = Math.floor(Math.random() * 3);
  const [answer, setAnswer] = useState(" ");
  const [choice, setChoice] = useState(" ");
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [button3, setButton3] = useState("");
  const [button4, setButton4] = useState("");

  function handleCategoryChange(event) {
    const value = event.target.value;

    if (value === "CSS") {
      setCategoryQ(questionDataCSS[randomNumber].question);
      setAnswer(questionDataCSS[randomNumber].answer);
      setButton1(questionDataCSS[randomNumber].choice1);
      setButton2(questionDataCSS[randomNumber].choice2);
      setButton3(questionDataCSS[randomNumber].choice3);
      setButton4(questionDataCSS[randomNumber].choice4);
    } else if (value === "JS") {
      setCategoryQ(questionDataJS[randomNumber].question);
      setAnswer(questionDataJS[randomNumber].answer);
      setButton1(questionDataJS[randomNumber].choice1);
      setButton2(questionDataJS[randomNumber].choice2);
      setButton3(questionDataJS[randomNumber].choice3);
      setButton4(questionDataJS[randomNumber].choice4);
    }
  }

  function handleChoice1() {
    setChoice(button1);
    checkAnswer();
  }

  function handleChoice2() {
    setChoice(button2);
    checkAnswer();
  }

  function handleChoice3() {
    setChoice(button3);
    checkAnswer();
  }
  function handleChoice4() {
    setChoice(button4);
    checkAnswer();
  }

  // function handleChoiceClick(choice) {
  //   if (choice == answer) {
  //     alert("Well done!");
  //   } else {
  //     alert("Sorry, that's incorrect.");
  //   }
  // }

  function checkAnswer() {
    if (choice === answer) {
      alert("Well done!");
    } else {
      alert("Sorry, that's incorrect.");
    }
    // assign a value to userAnswer from one of the 4 choice buttons
    // compare choice of button vs QuestionData.js answer
    // send alert to user if answer is right
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
      <button onClick={() => handleChoice1()}>{button1}</button>
      <button onClick={() => handleChoice2()}>{button2}</button>
      <button onClick={() => handleChoice3()}>{button3}</button>
      <button onClick={() => handleChoice4()}>{button4}</button>
      <h4> {randomNumber} </h4>
      <div className="App"></div>
    </>
  );
}
// to be a button component
export default App;

// const [categoryImg, setCategoryImg] = useState(questionDataJS[1].image);
// Q1 is index 0, Q2 is index 1, Q3 is index 2
