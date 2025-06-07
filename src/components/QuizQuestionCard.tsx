import { QuizQuestionCardProps } from "../interface/QuizQuestionCardProps";
import { QuizOption } from "../interface/QuizQuestion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid"; // Icons for feedback

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
    <div className="max-w-2xl w-full mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">{quizTitle}</h2>

      {/* Name Input */}
      <div className="mb-6">
        <label className="block text-lg font-bold">Enter your name:</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>

      <p className="text-lg font-bold mb-2">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>
      <p className="text-lg mb-4">{currentQuestion.question}</p>
      {/* Show question image if there is one */}
      {currentQuestion.image && (
        <img
          src={currentQuestion.image}
          alt="Question related"
          className="max-w-full h-auto rounded-lg shadow mb-2"
        />
      )}

      <div className="flex flex-col gap-3">
        {shuffledOptions.map((option: QuizOption, idx: number) => (
          <button
            key={idx}
            className="block w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 transition-all text-lg font-medium"
            onClick={() => handleAnswer(option.text)}
            disabled={showNext || showRetry}
          >
            {/* If option has image, show it */}
            {option.image && (
                <img
                src={option.image}
                alt={`Option ${idx + 1}`}
                className="w-12 h-12 object-contain rounded bg-white p-1"
                />
            )}
            {option.text}
          </button>
        ))}
      </div>

      <div className="mt-3 min-h-10 flex items-center gap-2 text-sm font-bold transition-opacity duration-300">
        {feedback ? (
          <>
            {feedback.includes("Correct") ? (
              <CheckCircleIcon className="w-5 h-5 text-green-500" /> // Slightly smaller icon
            ) : (
              <XCircleIcon className="w-5 h-5 text-red-500" />
            )}
            <span className={`text-${feedback.includes("Correct") ? "green" : "red"}-600`}>
              {feedback}
            </span>
          </>
        ) : (
          <span className="opacity-0">Placeholder</span> // Keeps height fixed
        )}
      </div>

      <div className="mt-3 min-h-14 flex flex-col items-start gap-3">
        {showNext ? (
          <button
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-700 active:scale-95 transition-all w-fit inline-flex"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        ) : showRetry ? (
          <button
            className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-700 active:scale-95 transition-all w-fit inline-flex"
            onClick={handleRetry}
          >
            Retry
          </button>
        ) : (
          <span className="opacity-0">Placeholder</span> // Keeps height fixed
        )}
      </div>
    </div>
  );
};

export default QuizQuestionCard;
