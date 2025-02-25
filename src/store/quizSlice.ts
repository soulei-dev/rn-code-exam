import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, Question } from '@models/question';
import { selectRandomQuestions } from '@utils/selectedRandomQuestions';

type QuizState = {
  currentQuestionIndex: number;
  selectedAnswers: Record<string, Answer[]>;
  questions: Question[];
  correctAnswersCount: number;
  isTestPassed: boolean | null;
};

const initialState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswers: {},
  questions: selectRandomQuestions(),
  correctAnswersCount: 0,
  isTestPassed: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectAnswer: (
      state,
      action: PayloadAction<{ questionId: string; answer: Answer; type: string }>
    ) => {
      let { questionId, answer, type } = action.payload;

      if (!state.selectedAnswers[questionId]) {
        state.selectedAnswers[questionId] = [];
      }

      switch (type) {
        case "singleChoice":
        case "singleChoice2":
          state.selectedAnswers[questionId] = [answer];
          break;
        case "multiChoice":
          const alreadySelected = state.selectedAnswers[questionId].some(a => a.label === answer.label);

        if (alreadySelected) {
          state.selectedAnswers[questionId] = state.selectedAnswers[questionId].filter(a => a.label !== answer.label);
        } else {
          state.selectedAnswers[questionId].push(answer);
        }
        break;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      }
    },
    finalizeQuiz: (state) => {
      let correctAnswersCount = 0;
        const groupedAnswers: Record<string, Answer[]> = {};
    
        Object.entries(state.selectedAnswers).forEach(([questionKey, userAnswers]) => {
          const questionId = questionKey.split("_")[0];
    
          if (!groupedAnswers[questionId]) {
            groupedAnswers[questionId] = [];
          }
    
          groupedAnswers[questionId].push(...userAnswers);
        });
    
        Object.entries(groupedAnswers).forEach(([questionId, userAnswers]) => {
          const question = state.questions.find(q => q.uuid === questionId);
    
          if (question) {
            const correctAnswers = question.answers.filter(a => a.correct);
            const userSelectedCorrectAnswers = userAnswers.filter(a => a.correct);
    
            let isCorrect = false;
    
            switch (question.type) {
              case "singleChoice":
                isCorrect = userAnswers.length === 1 && userAnswers[0].correct === true;
                break;
                
              case "singleChoice2":
                const part1Answers = state.selectedAnswers[`${questionId}_part1`] || [];
                const part2Answers = state.selectedAnswers[`${questionId}_part2`] || [];
  
                const correctPart1 = part1Answers.filter(a => a.correct).length > 0;
                const correctPart2 = part2Answers.filter(a => a.correct).length > 0;
  
                isCorrect = correctPart1 && correctPart2;
                break;
              case "multiChoice":
                const hasOnlyCorrectAnswers = userAnswers.every(a => a.correct);

                const hasAllCorrectAnswers = userSelectedCorrectAnswers.length === correctAnswers.length &&
                  correctAnswers.every(ca => userSelectedCorrectAnswers.some(ua => ua.label === ca.label));

                isCorrect = hasOnlyCorrectAnswers && hasAllCorrectAnswers;
                break;
            }
    
            if (isCorrect) {
              correctAnswersCount++;
            }
          }
        });
    
        state.correctAnswersCount = correctAnswersCount;
        state.isTestPassed = correctAnswersCount >= 35;
    },
    resetQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.selectedAnswers = {};
      state.questions = selectRandomQuestions();
      state.correctAnswersCount = 0;
      state.isTestPassed = null;
    },
  },
});

export const { selectAnswer, nextQuestion, resetQuiz, finalizeQuiz } = quizSlice.actions;
export default quizSlice.reducer;
