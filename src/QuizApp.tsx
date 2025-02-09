import { useState, useEffect, useMemo } from "react";
import quizzes from "./data";
import { QuizQuestion } from "./interface/QuizQuestion";
import QuizQuestionCard from "./components/QuizQuestionCard";

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
  const [retryCounts, setRetryCounts] = useState<{ [question: string]: number }>({}); // Track retries per question
  const [questionScores, setQuestionScores] = useState<{ [question: string]: number }>({}); // Store final scores per question

  // Shuffle questions only once per quiz change
  useEffect(() => {
    setQuestions(shuffleArray([...quizzes[quizIndex].questions])); // Shuffle questions ONCE
    setCurrentQuestionIndex(0);
    setFeedback(null);
    setShowNext(false);
    setShowRetry(false);
    setScore(0);
    setRetryCounts({});
    setQuestionScores({});
  }, [quizIndex]);

  useEffect(() => {
    console.log("Question Scores:", questionScores);
  }, [questionScores]);


  const currentQuestion = questions[currentQuestionIndex];

  // Shuffle options **only once per question**
  const shuffledOptions = useMemo(
    () => (currentQuestion ? shuffleArray([...currentQuestion.options]) : []),
    [currentQuestion]
  );

  const handleAnswer = (selected: string) => {
    if (!currentQuestion) return;

    const questionKey = currentQuestion.question;
    const retryCount = retryCounts[questionKey] || 0;

    if (selected === currentQuestion.answer) {
      setFeedback("Correct!");
      setShowNext(true);
      setShowRetry(false);

      // Calculate the final score based on the highest retry count for that question
      const finalScore = 20 * Math.pow(0.5, retryCount);

      setQuestionScores((prev) => {
        const previousScore = prev[questionKey] || 0;

        // Update the total score by removing the previous score and adding the new one
        setScore((prevTotal) => prevTotal - previousScore + finalScore);

        return { ...prev, [questionKey]: finalScore };
      });
    } else {
      setFeedback(`Wrong! The correct answer is ${currentQuestion.answer}`);
      setShowRetry(true);

      // Always requeue the question, even if answered correctly later
      setQuestions((prev) => [...prev, currentQuestion]);

      // Increment retry count
      setRetryCounts((prev) => ({
        ...prev,
        [questionKey]: retryCount + 1,
      }));
    }
  };

  const handleNextQuestion = () => {
    setFeedback(null);
    setShowNext(false);
    setShowRetry(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleRetry = () => {
    setFeedback(null);
    setShowRetry(false);
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
    <QuizQuestionCard
        name={name}
        setName={setName}
        quizTitle={quizzes[quizIndex].title}
        currentQuestion={currentQuestion}
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={questions.length}
        shuffledOptions={shuffledOptions}
        feedback={feedback}
        showNext={showNext}
        showRetry={showRetry}
        handleAnswer={handleAnswer}
        handleNextQuestion={handleNextQuestion}
        handleRetry={handleRetry}
      />
  );
};

export default QuizApp;
