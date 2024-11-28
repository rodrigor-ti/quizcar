import { useContext } from "react";
import { QuizContext } from "../context/quiz"; 

import Quiz from "../img/quiz.png";

import "./Welcome.css"

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Quiz Automotivo</h2>
      <p>Clique abaixo e teste os seus conhecimentos automotivos</p>
      <div>
        <img src={Quiz} alt="Início do Quiz" />
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Iniciar</button>

    </div>
  );
};

export default Welcome;