import { useState, useEffect, useMemo } from "react";
import quizzes from "./data";

// Define the Quiz Question type
interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

// Shuffle array function
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

const QuizApp = () => {
  const [name, setName] = useState<string>("");
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showNext, setShowNext] = useState<boolean>(false);
  const [showRetry, setShowRetry] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [retries, setRetries] = useState<{ [question: string]: number }>({}); // Track retries per question

  // Shuffle questions only once per quiz change
  useEffect(() => {
    setQuestions(shuffleArray([...quizzes[quizIndex].questions])); // Shuffle questions ONCE
    setCurrentQuestionIndex(0);
    setFeedback(null);
    setShowNext(false);
    setShowRetry(false);
    setScore(0);
    setRetries({});
  }, [quizIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  // Fix hook order by placing useMemo **before** useEffect
  const shuffledOptions = useMemo(
    () => (currentQuestion ? shuffleArray([...currentQuestion.options]) : []),
    [currentQuestion]
  );

  const handleAnswer = (selected: string) => {
    if (!currentQuestion) return;

    if (selected === currentQuestion.answer) {
      setFeedback("Correct!");
      setShowNext(true);
      setShowRetry(false);

      // Calculate score with deductions based on retries
      const retryCount = retries[currentQuestion.question] || 0;
      const deduction = 20 * (1 - Math.pow(0.5, retryCount));
      const questionScore = Math.max(20 - deduction, 0); // Ensure score doesn't go negative

      setScore((prev) => prev + questionScore);
    } else {
      setFeedback(`Wrong! The correct answer is ${currentQuestion.answer}`);
      setShowRetry(true);

      // Requeue question immediately
      setQuestions((prev) => [...prev, currentQuestion]);

      // Track retry count for scoring
      setRetries((prev) => ({
        ...prev,
        [currentQuestion.question]: (prev[currentQuestion.question] || 0) + 1,
      }));
    }
  };

  const handleNextQuestion = () => {
    setFeedback(null);
    setShowNext(false);
    setShowRetry(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleSwitchQuiz = () => {
    setQuizIndex((prev) => (prev + 1) % quizzes.length);
    setName("");
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="text-center p-4">
        <h2 className="text-2xl font-bold">Quiz Completed!</h2>
        <p className="text-lg mt-2">
          🎉 Congratulations, {name ? <span className="font-bold">{name}</span> : "Player"}! Your score is{" "}
          <span className="font-bold">{score}</span>.
        </p>
        <button
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          onClick={handleSwitchQuiz}
        >
          Switch Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">{quizzes[quizIndex].title}</h2>

      {/* Name Input at the top */}
      <div className="mb-4">
        <label className="block text-lg font-bold">Enter your name:</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-lg w-full mt-2"
        />
      </div>

      <p className="text-lg font-bold mb-2">
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
      <p className="text-lg mb-3">{currentQuestion.question}</p>
      <div className="flex flex-col gap-2">
        {shuffledOptions.map((option: string, idx: number) => (
          <button
            key={idx}
            className="block w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition-all text-lg font-medium"
            onClick={() => handleAnswer(option)}
            disabled={showNext || showRetry}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-4 text-red-600 font-bold">{feedback}</p>}
      {showNext && (
        <button
          className="mt-4 bg-green-500 text-white p-3 rounded-lg hover:bg-green-700"
          onClick={handleNextQuestion}
        >
          Next
        </button>
      )}
      {showRetry && (
        <button
          className="mt-4 bg-red-500 text-white p-3 rounded-lg hover:bg-red-700"
          onClick={handleNextQuestion} // Now advances after requeue
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default QuizApp;
