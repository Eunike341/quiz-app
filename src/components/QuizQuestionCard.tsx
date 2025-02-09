import { QuizQuestionCardProps } from "../interface/QuizQuestionCardProps";

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
              className="border p-2 rounded-lg w-full mt-2"
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
              onClick={handleRetry}
            >
              Retry
            </button>
          )}
        </div>
  );
};

export default QuizQuestionCard;