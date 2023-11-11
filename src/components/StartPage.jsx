import { useContext } from "react";
import QuizContext from "../context/quizContext";

export const StartPage = () => {
  const { startQuiz, showStart } = useContext(QuizContext);
  return (
    <>
      {showStart && (
        <section className="w-full h-full text-center flex items-center justify-center">
          <div className="w-full max-w-3xl mx-auto p-10 rounded-md border border-black">
            <h1 className="text-2xl font-bold">Basic ReactJs Quiz</h1>
            <button
              onClick={startQuiz}
              className="mt-10 bg-black text-white px-4 py-2 rounded-md"
            >
              Start Quiz
            </button>
          </div>
        </section>
      )}
    </>
  );
};
