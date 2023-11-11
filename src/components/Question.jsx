import { useContext } from "react";
import QuizContext from "../context/quizContext";

export const QuestionPage = () => {
  const {
    showQuiz,
    question,
    quizs,
    checkAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
  } = useContext(QuizContext);
  return (
    <>
      {showQuiz && (
        <section className={`w-full h-full flex items-center justify-center`}>
          <div className="w-full min-h-min max-w-3xl mx-auto p-10 rounded-md border border-black">
            <p>
              {quizs.indexOf(question) + 1} / {quizs?.length}
            </p>
            <h1 className="mt-4 text-lg font-bold">{question.question}</h1>
            {question?.options?.map((item, index) => (
              <button
                key={index}
                className={`w-full text-black border border-black py-2 px-3 mt-3 rounded-md ${
                  selectedAnswer === item && "bg-green-300"
                }`}
                onClick={() => checkAnswer(item)}
              >
                {item}
              </button>
            ))}
            <div>
              {questionIndex + 1 !== quizs.length ? (
                <button
                  className="py-2 px-3 mt-3 bg-black text-white font-bold rounded-md disabled:bg-gray-300 disabled:cursor-not-allowed"
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="py-2 px-3 mt-3 bg-black text-white font-bold rounded-md"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
