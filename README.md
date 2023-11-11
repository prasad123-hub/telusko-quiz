# Quiz app powered by React + Vite

## telusko-quiz

The Simple Quiz Application using React (Vite) + TailwindCSS.

- Steps:

  - Clone the repo.
  - Install all the dependencies via `npm install`.
  - Start development Server using `npm run dev` , server will start on localhost:5173

- Features:
  - Fake questions json data in `public/questions.json`
  - used React Context for Global state management.
  - Initially StartPage will be rendered.
  - when user clicks on start quiz, Quiz will be started.
  - Question will be rendered based on current index.
  - If User selected correct answer, marks state in global context will be updated.
  - If user has not selected any option, Next Question Button will be disabled.
  - If all questions are completed and reached to the last question then show result button will be rendered.
  - If showResult flag is true, Result Page will be rendered.
  - Total marks will be calculated based on currents Marks and (Total Question length multiplied by 5 === 50)
