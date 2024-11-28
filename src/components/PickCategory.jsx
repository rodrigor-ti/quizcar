import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from "../img/category.png";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function chooseCategoryAndReorderQuestions(category) {
    dispatch({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
      <h2>Qual categoria você prefere?</h2>
      <p>Clique no tema de sua preferência:</p>
      <div>
        {quizState.questions.map((question) => (
          <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>
        ))}
      </div>
      <img src={Category} alt="Categorias do Quiz" />
    </div>
  );
};

export default PickCategory;
