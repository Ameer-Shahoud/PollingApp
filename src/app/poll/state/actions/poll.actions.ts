import { createAction, props } from "@ngrx/store";
import { Question } from "../../models/question";

export const getQuestions = createAction("[Home Page] GetQuestions");

export const getQuestionsSuccess = createAction(
  "[GetQuestions Effect] GetQuestions Success",
  props<{ questions: Question[] }>()
);

export const getQuestionsFailure = createAction(
  "[GetQuestions Effect] GetQuestions Failure",
  props<{ error: string }>()
);

export const selectQuestion = createAction(
  "[Home Page] SelectQuestion",
  props<{ questionId: string }>()
);

export const selectQuestionSuccess = createAction(
  "[SelectQuestion Effect] SelectQuestion Success",
  props<{ selectedQuestion: Question }>()
);

export const selectQuestionFailure = createAction(
  "[SelectQuestion Effect] SelectQuestion Failure",
  props<{ error: string }>()
);

export const saveQuestionAnswer = createAction(
  "[Question Page] SaveQuestionAnswer",
  props<{
    authedUserId: string;
    questionId: string;
    answer: "optionOne" | "optionTwo";
  }>()
);

export const saveQuestionAnswerSuccess = createAction(
  "[SaveQuestion Effect] SaveQuestionAnswer Success",
  props<{ questionId: string }>()
);

export const saveQuestionAnswerFailure = createAction(
  "[SaveQuestion Effect] SaveQuestionAnswer Failure",
  props<{ error: string }>()
);
