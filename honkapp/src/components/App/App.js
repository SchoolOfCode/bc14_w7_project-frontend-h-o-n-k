import "./App.css";
import React, { useState, useEffect } from "react";
import { questionDataJS } from "../../QuestionData";
import { questionDataCSS } from "../../QuestionData";
// import Score from "../ScoreContainer";

function App() {
  const [categoryQ, setCategoryQ] = useState("hey");
  const [categoryImg, setCategoryImg] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [answer, setAnswer] = useState("");
  const [choice, setChoice] = useState("");
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [button3, setButton3] = useState("");
  const [button4, setButton4] = useState("");

  function randomiseNumber() {
    setRandomNumber(Math.floor(Math.random() * 3));
  }

  function nextQuestion() {
    randomiseNumber();
    setChoice("");
    handleCategoryChange({
      target: { value: categoryQ.startsWith("J") ? "JS" : "CSS" },
    });
  }

  function handleChoice1() {
    setChoice(button1);
  }

  function handleChoice2() {
    setChoice(button2);
  }

  function handleChoice3() {
    setChoice(button3);
  }
  function handleChoice4() {
    setChoice(button4);
  }

  function handleCategoryChange(event) {
    const value = event.target.value;
    randomiseNumber();

    if (value === "CSS") {
      setCategoryQ(questionDataCSS[randomNumber].question);
      setCategoryImg(questionDataCSS[randomNumber].image);
      setAnswer(questionDataCSS[randomNumber].answer);
      setButton1(questionDataCSS[randomNumber].choice1);
      setButton2(questionDataCSS[randomNumber].choice2);
      setButton3(questionDataCSS[randomNumber].choice3);
      setButton4(questionDataCSS[randomNumber].choice4);
      setChoice("");
    } else if (value === "JS") {
      setCategoryQ(questionDataJS[randomNumber].question);
      setCategoryImg(questionDataJS[randomNumber].image);
      setAnswer(questionDataJS[randomNumber].answer);
      setButton1(questionDataJS[randomNumber].choice1);
      setButton2(questionDataJS[randomNumber].choice2);
      setButton3(questionDataJS[randomNumber].choice3);
      setButton4(questionDataJS[randomNumber].choice4);
      setChoice("");
    }
  }

  useEffect(() => {
    if (choice !== "" && choice === answer) {
      alert("Well done!");
    } else if (choice !== "" && choice !== answer) {
      alert("Sorry, that's incorrect.");
    }
  }, [choice, answer]);
  // assign a value to userAnswer from one of the 4 choice buttons
  // compare choice of button vs QuestionData.js answer
  // send alert to user if answer is right

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
      <img src={categoryImg} alt="question"></img>
      <button onClick={() => handleChoice1()}>{button1}</button>
      <button onClick={() => handleChoice2()}>{button2}</button>
      <button onClick={() => handleChoice3()}>{button3}</button>
      <button onClick={() => handleChoice4()}>{button4}</button>
      <button onClick={() => nextQuestion()}>Next Question</button>
      <h4> {randomNumber} </h4>
      {/* <Score updateScore={ Score.updateScore }/> */}
      <div className="App"></div>
    </>
  );
}
// to be a button component
export default App;

// const [categoryImg, setCategoryImg] = useState(questionDataJS[1].image);
// Q1 is index 0, Q2 is index 1, Q3 is index 2
