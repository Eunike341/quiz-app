import { QuizQuestionCardProps } from "../interface/QuizQuestionCardProps";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'; // Icons for feedback


const QuizQuestionCard = ({
  name,
  setName,
  quizTitle,
  currentQuestion,
  currentQuestionIndex,
  totalQuestions,
  shuffledOptions,
  feedback,
  showNext,
  showRetry,
  handleAnswer,
  handleNextQuestion,
  handleRetry,
}: QuizQuestionCardProps) => {
  return (
    <div className="p-6 max-w-2xl w-full mx-auto bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-4">{quizTitle}</h2>

          {/* Name Input at the top */}
          <div className="mb-4">
            <label className="block text-lg font-bold">Enter your name:</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          <p className="text-lg font-bold mb-2">
            Question {currentQuestionIndex + 1} of {totalQuestions}
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

          {feedback && (
              <div className="mt-4 flex items-center gap-2 text-lg font-bold">
                {feedback.includes("Correct") ? (
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                ) : (
                  <XCircleIcon className="w-6 h-6 text-red-500" />
                )}
                <span className={`text-${feedback.includes("Correct") ? "green" : "red"}-600`}>
                  {feedback}
                </span>
              </div>
          )}


          {showNext && (
            <button
              className="mt-4 bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 active:scale-95 transition-all"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
          {showRetry && (
            <button
              className="mt-4 bg-red-500 text-white p-3 rounded-lg hover:bg-red-700 active:scale-95 transition-all"
              onClick={handleRetry}
            >
              Retry
            </button>
          )}
        </div>
  );
};

export default QuizQuestionCard;