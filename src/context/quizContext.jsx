import { createContext, useState, useEffect } from "react";

// Global store to manage quiz questions
const QuizContext = createContext({});

const ContextProvider = ({ children }) => {
  const [allQuestions, setAllQuestions] = useState();
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(allQuestions[index]);

  // Fetch All the Questions
  useEffect(() => {
    fetch("questions.json")
      .then((res) => res.json())
      .then((data) => setAllQuestions(data));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        allQuestions,
        index,
        setIndex,
        currentQuestion,
        setCurrentQuestion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, ContextProvider };
