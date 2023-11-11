import { createContext, useState, useEffect } from "react";

const QuizContext = createContext({});

export const ContextProvider = ({ children }) => {
  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks

  const [quizs, setQuizs] = useState([]);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(0);

  // Display Controlling States

  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Fetch all questions from "public/questions.json"

  useEffect(() => {
    fetch("questions.json")
      .then((res) => res.json())
      .then((data) => setQuizs(data));
  }, []);

  // Set a Single (Currrent Selected based on index) Question

  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  // Start Quiz

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  // Check Answer

  const checkAnswer = (selected) => {
    setCorrectAnswer(question.answer);
    setSelectedAnswer(selected);
    if (selected === question.answer) {
      setMarks(marks + 5);
    }
  };

  // Next Quesion

  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(questionIndex + 1);
  };

  // Show Result

  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  // Reset Quiz and Start Again

  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
  };

  return (
    <QuizContext.Provider
      value={{
        startQuiz,
        showStart,
        showQuiz,
        question,
        quizs,
        checkAnswer,
        correctAnswer,
        selectedAnswer,
        questionIndex,
        nextQuestion,
        showTheResult,
        showResult,
        marks,
        startOver,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
