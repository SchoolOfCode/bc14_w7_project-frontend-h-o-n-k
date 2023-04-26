import "./App.css";
import React, { useState, useEffect } from "react";
import { questionDataJS, questionDataCSS } from "../../QuestionData";

function App() {
  const [categoryQ, setCategoryQ] = useState("Choose your category?");
  const [categoryImg, setCategoryImg] = useState(
    "https://i.imgur.com/UPMqTgr.png"
  );
  const [randomNumber, setRandomNumber] = useState(0);
  const [answer, setAnswer] = useState("");
  const [choice, setChoice] = useState("");
  const [button1, setButton1] = useState("");
  const [button2, setButton2] = useState("");
  const [button3, setButton3] = useState("");
  const [button4, setButton4] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  function randomiseNumber() {
    setRandomNumber(Math.floor(Math.random() * 3));
  }

  function nextQuestion() {
    randomiseNumber();
    setChoice("");
    setMessage("");
    const data =
      categoryQ === questionDataCSS[randomNumber].question
        ? questionDataCSS[randomNumber]
        : questionDataJS[randomNumber];
    setCategoryQ(data.question);
    setCategoryImg(data.image);
    setAnswer(data.answer);
    setButton1(data.choice1);
    setButton2(data.choice2);
    setButton3(data.choice3);
    setButton4(data.choice4);
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
      setMessage("");
    } else if (value === "JS") {
      setCategoryQ(questionDataJS[randomNumber].question);
      setCategoryImg(questionDataJS[randomNumber].image);
      setAnswer(questionDataJS[randomNumber].answer);
      setButton1(questionDataJS[randomNumber].choice1);
      setButton2(questionDataJS[randomNumber].choice2);
      setButton3(questionDataJS[randomNumber].choice3);
      setButton4(questionDataJS[randomNumber].choice4);
      setChoice("");
      setMessage("");
    }
  }

  useEffect(() => {
    if (choice !== "" && choice === answer) {
      setMessage("Well done! That is the right answer");
      setScore(score + 1);
    } else if (choice !== "" && choice !== answer) {
      setMessage(`Sorry, that's incorrect. The correct answer is ${answer}`);
      // Score.updateScore(false);
    }
  }, [choice, answer]);
  // assign a value to userAnswer from one of the 4 choice buttons
  // compare choice of button vs QuestionData.js answer
  // send alert to user if answer is right

  return (
    <>
      <select name="category" id="category" onChange={handleCategoryChange} className = "drop-down">
        <option selected disabled>
          Select a category
        </option>
        <option value="JS">JS</option>
        <option value="CSS">CSS</option>
      </select>
      <div className="question-container">
        <h2>{categoryQ}</h2>
        <img src={categoryImg} alt="question"></img>
      </div>
      <div className="button-container">
        <button className ="answer-option"onClick={() => handleChoice1()}>{button1}</button>
        <button className ="answer-option"onClick={() => handleChoice1()}>{button2}</button>
        <button className ="answer-option"onClick={() => handleChoice1()}>{button3}</button>
        <button className ="answer-option"onClick={() => handleChoice1()}>{button4}</button>
      </div>
      <button onClick={() => nextQuestion()}>Next Question</button>

      <h4> {message} </h4>
      <h4>Score: {score} </h4>
      <div className="App"></div>
    </>
  );
}
// to be a button component
export default App;

// const [categoryImg, setCategoryImg] = useState(questionDataJS[1].image);
// Q1 is index 0, Q2 is index 1, Q3 is index 2
