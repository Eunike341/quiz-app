import { QuizQuestion } from "./QuizQuestion";

export interface QuizQuestionCardProps {
     name: string;
     setName: (name: string) => void;
     quizTitle: string;
     currentQuestion: QuizQuestion;
     currentQuestionIndex: number;
     totalQuestions: number;
     shuffledOptions: {
        text: string;
        image?: string;
     }[];
     feedback: string | null;
     showNext: boolean;
     showRetry: boolean;
     handleAnswer: (selected: string) => void;
     handleNextQuestion: () => void;
     handleRetry: () => void;
   }