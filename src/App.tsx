import QuizApp from "./QuizApp";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav className="p-4 bg-blue-500 text-white">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/records">View Scores</Link>
      </nav>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <QuizApp />
          </div>
    </div>

  );
};

export default App;
