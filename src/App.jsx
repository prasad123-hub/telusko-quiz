import { useContext } from "react";
import { QuizContext } from "./context/quizContext";

function App() {
  const { allQuestions } = useContext(QuizContext);

  console.log(allQuestions);
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
