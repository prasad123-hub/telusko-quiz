import { QuestionPage } from "./components/Question";
import { ResultPage } from "./components/ResultPage";
import { StartPage } from "./components/StartPage";

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-cente bg-white">
      {/* If Start page is true initially */}
      <StartPage />
      {/* If Quiz Started render Questions */}
      <QuestionPage />
      {/* If Quiz completed Show the Result Page */}
      <ResultPage />
    </div>
  );
}

export default App;
