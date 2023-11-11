import { useContext } from "react";
import QuizContext from "../context/quizContext";

export const ResultPage = () => {
  const { showResult, marks, quizs, startOver } = useContext(QuizContext);
  return (
    <>
      {showResult && (
        <section className="w-full h-full flex items-center justify-center">
          <div className="w-full min-h-min max-w-3xl mx-auto p-10 rounded-md border border-black">
            <h1 className="mb-2 font-bold">
              {marks > (quizs.length * 5) / 2 ? "Awesome!" : "Oops!"}
            </h1>
            <h3 className="mb-3 font-bold">
              Your score is {marks} out of {quizs.length * 5}
            </h3>

            <button
              onClick={startOver}
              className="py-2 px-4 bg-black text-white rounded-md"
            >
              Start Over
            </button>
          </div>
        </section>
      )}
    </>
  );
};
