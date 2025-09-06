import type { QuizQuestion } from '../interface/QuizQuestion';
import quiz1 from "./quiz1";
import praexam from "./praexam";
import filemanagement from "./filemanagement";
import filemanagement2 from "./filemanagement2";
import excel3 from "./excel3";

type QuizType = { id: number, title: string, questions: QuizQuestion[] };

const quizzes: Record<string, QuizType> = {'quiz1':quiz1, 'praexam':praexam,
 'filemanagement':filemanagement,
 'filemanagement2':filemanagement2,
 'excel3':excel3};

export default quizzes;
