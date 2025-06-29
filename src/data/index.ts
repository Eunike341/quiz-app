import quiz1 from "./quiz1";
import praexam from "./praexam";

export type QuizType = typeof quiz1;

const quizzes: Record<string, QuizType> = {'quiz1':quiz1, 'praexam':praexam};

export default quizzes;
