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
    <div className="max-w-2xl w-full mx-auto px-6 py-[min(1.5rem,3svh)]">
      <h2 className="text-[min(1.125rem,2.5svh)] leading-[min(2rem,4svh)] font-bold mb-[min(0.5rem,1svh)]">{quizTitle}</h2>

      {/* Name Input */}
      <div className="mb-[min(1.5rem,3svh)]">
        <label className="block text-[min(1.125rem,2.5svh)] leading-[min(1.75rem,3.5svh)] font-bold">Enter your name:</label>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-3 py-[min(0.75rem,2svh)] rounded-lg w-full mt-[min(0.5rem,1svh)] focus:ring-2 focus:ring-blue-500 transition-all"
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
            className="block w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 transition-all text-lg font-medium"
            onClick={() => handleAnswer(option.text)}
            disabled={showNext || showRetry}
          >
            {/* If option has image, show it */}
            {option.image && (
                <img
                src={option.image}
                alt={`Option ${idx + 1}`}
                className="size-[min(3rem,6svh)] object-contain rounded bg-white p-[min(0.25rem,0.5svh)]"
                />
            )}
            {option.text}
          </button>
        ))}
      </div>

      <div className="mt-[min(0.75rem,2svh)] min-h-[min(2.5rem,5svh)] flex items-center gap-2 text-sm font-bold transition-opacity duration-300">
        {feedback ? (
          <>
            {feedback.includes("Correct") ? (
              <CheckCircleIcon className="size-[min(1.25rem,2.5svh)] text-green-500" /> // Slightly smaller icon
            ) : (
              <XCircleIcon className="size-[min(1.25rem,2.5svh)] text-red-500" />
            )}
            <span className={`text-${feedback.includes("Correct") ? "green" : "red"}-600`}>
              {feedback}
            </span>
          </>
        ) : (
          <span className="opacity-0">Placeholder</span> // Keeps height fixed
        )}
      </div>

      <div className="mt-[min(0.75rem,1.5svh)] min-h-[min(3.5rem,7svh)] flex flex-col items-start gap-[min(0.75rem,1.5svh)]">
        {showNext ? (
          <button
            className="bg-green-500 text-white px-3 py-[min(0.75rem,1.5svh)] rounded-lg hover:bg-green-700 active:scale-95 transition-all w-fit inline-flex"
            onClick={handleNextQuestion}
          >
            Next
          </button>
        ) : showRetry ? (
          <button
            className="bg-red-500 text-white px-3 py-[min(0.75rem,1.5svh)] rounded-lg hover:bg-red-700 active:scale-95 transition-all w-fit inline-flex"
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
