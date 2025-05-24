// QuizQuestion.ts
export interface QuizOption {
  text: string;
  image?: string;
}

export interface QuizQuestion {
  question: string;
  image?: string;
  options: QuizOption[];
  answer: string;
}
