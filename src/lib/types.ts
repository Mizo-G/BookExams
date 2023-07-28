
export type Answer = {
    i: number;
    value: string;
  };

  export type Choice = {
    i: number;
    value: string;
    chosen: boolean;
  };

  export type Question = {
    questionId: number;
    type: "MCQ";
    isCorrect: boolean;
    question: string;
    answer: Answer;
    choices: Choice[];
  };

  export  type WrittenQuestion = {
    questionId: number;
    type: "written";
    question: string;
    answered: string;
  };

  export type Exam = {
    id: number;
    name: string;
    startTime: string;
    endTime: string;
    mcqResult: number;
    writtenResult: number;
    questions: Question[];
    writtenQuestions: WrittenQuestion[];
  };