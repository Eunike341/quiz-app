import React, { useState, useEffect } from "react";

import quizzes from "./data";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const QuizApp = () => {
  const [quizIndex, setQuizIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [showRetry, setShowRetry] = useState(false);

  useEffect(() => {
    setQuestions(shuffleArray([...quizzes[quizIndex].questions]));
  }, [quizIndex]);

  const handleAnswer = (selected) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selected === currentQuestion.answer) {
      setFeedback("Correct!");
      setShowNext(true);
      setShowRetry(false);
    } else {
      setFeedback(`Wrong! The correct answer is ${currentQuestion.answer}`);
      setShowRetry(true);
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
    setQuestions((prev) => [...prev, questions[currentQuestionIndex]]);
  };

  const handleSwitchQuiz = () => {
    setQuizIndex((prev) => (prev + 1) % quizzes.length);
    setCurrentQuestionIndex(0); // Reset question index
    setFeedback(null);
    setShowNext(false);
    setShowRetry(false);
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="text-center p-4">
        <h2>Quiz Completed!</h2>
        <button
                className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-all"
                onClick={handleSwitchQuiz}
              >
                Switch Quiz
              </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const shuffledOptions = shuffleArray([...currentQuestion.options]);

  return (
    <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">{quizzes[quizIndex].title}</h2>
      <p className="text-lg font-bold mb-2">Question {currentQuestionIndex + 1} of {questions.length}</p>
      <p className="text-lg mb-3">{currentQuestion.question}</p>
      <div className="flex flex-col gap-2">
        {shuffledOptions.map((option, idx) => (
          <button
            key={idx}
            className="block w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition-all text-lg font-medium whitespace-nowrap"
            onClick={() => handleAnswer(option)}
            disabled={showNext || showRetry}>
            {option}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-4 text-red-600 font-bold">{feedback}</p>}
      {showNext && (
        <button
          className="mt-4 bg-green-500 text-white p-3 rounded-lg hover:bg-green-700"
          onClick={handleNextQuestion}>
          Next
        </button>
      )}
      {showRetry && (
        <button
          className="mt-4 bg-red-500 text-white p-3 rounded-lg hover:bg-red-700"
          onClick={() => {
            handleRetry();
          }}>
          Retry
        </button>
      )}
    </div>
  );
};

export default QuizApp;
