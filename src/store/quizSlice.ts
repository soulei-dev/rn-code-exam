import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, Question } from '@models/question';
import { selectRandomQuestions } from '@utils/selectedRandomQuestions';

type QuizState = {
  currentQuestionIndex: number;
  selectedAnswers: Record<string, Answer[]>;
  questions: Question[];
};

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswers: {},
  questions: selectRandomQuestions(),
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectAnswer: (
      state,
      action: PayloadAction<{ questionId: string; answer: Answer; part?: "part1" | "part2" }>
    ) => {
      const { questionId, answer, part } = action.payload;
      const key = part ? `${questionId}_${part}` : `${questionId}_single`;

      if (!state.selectedAnswers[key]) {
        state.selectedAnswers[key] = [];
      }

      if (state.selectedAnswers[key].some((a) => a.label === answer.label)) {
        state.selectedAnswers[key] = state.selectedAnswers[key].filter((a) => a.label !== answer.label);
      } else {
        state.selectedAnswers[key].push(answer);
      }
    },
    nextQuestion(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      }
    },
  },
});

export const { selectAnswer, nextQuestion } = quizSlice.actions;
export default quizSlice.reducer;
