import Spacer from '@components/generals/Spacer';
import { COLORS } from '@constants/colors';
import { MAX_QUESTIONS } from '@constants/quizConstants';
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnswerOptions from '@components/quiz/AnswerOptions';
import CustomButton from '@components/buttons/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '@store/store';
import { selectAnswer, nextQuestion, finalizeQuiz } from '@store/quizSlice';
import { Answer } from '@models/question';
import { useRouter } from 'expo-router';
import { storeQuizResult } from 'src/storages/quizStorage';

const QuizScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { questions, currentQuestionIndex, selectedAnswers } = useSelector(
    (state: RootState) => state.quiz,
  );

  const question = questions[currentQuestionIndex];
  const hasQuestionParts = question.questionPart1 && question.questionPart2;

  const handleSelectedAnswer = (
    answer: Answer,
    part: 'part1' | 'part2' | 'single',
  ) => {
    dispatch(
      selectAnswer({
        questionId: `${question.uuid}_${part}`,
        answer,
        type: question.type,
      }),
    );
  };

  const handleValidateQuestion = () => {
    if (currentQuestionIndex + 1 === MAX_QUESTIONS) {
      dispatch(finalizeQuiz());

      const finalScore = store.getState().quiz.correctAnswersCount;

      storeQuizResult(finalScore);

      router.push({
        pathname: '/results',
        params: {
          correctAnswersCount: finalScore.toString(),
        },
      });
    }

    dispatch(nextQuestion());
  };

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <SafeAreaView>
          <Spacer size={68} />
          <Text style={styles.questionCounterText}>{`Question ${
            currentQuestionIndex + 1
          }/${MAX_QUESTIONS}`}</Text>
          <Spacer size={49} />
          {hasQuestionParts ? (
            <>
              {question.question && (
                <>
                  <Text style={styles.question}>{question.question}</Text>
                  <Spacer size={33} />
                </>
              )}
              <Text style={styles.question}>{question.questionPart1}</Text>
              <Spacer size={20} />
              <AnswerOptions
                answers={question.answers.slice(0, question.answers.length / 2)}
                selectedAnswer={selectedAnswers[`${question.uuid}_part1`] || []}
                onSelect={(answer) => handleSelectedAnswer(answer, 'part1')}
              />
              <Spacer size={20} />
              <Text style={styles.question}>{question.questionPart2}</Text>
              <Spacer size={20} />
              <AnswerOptions
                answers={question.answers.slice(question.answers.length / 2)}
                selectedAnswer={selectedAnswers[`${question.uuid}_part2`] || []}
                onSelect={(answer) => handleSelectedAnswer(answer, 'part2')}
              />
            </>
          ) : (
            <>
              <Text style={styles.question}>{question.question}</Text>
              <Spacer size={20} />
              <AnswerOptions
                answers={question.answers}
                selectedAnswer={
                  selectedAnswers[`${question.uuid}_single`] || []
                }
                onSelect={(answer) => handleSelectedAnswer(answer, 'single')}
              />
            </>
          )}
          <Spacer size={20} />
        </SafeAreaView>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton title="Valider" onPress={handleValidateQuestion} />
      </View>
    </>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
  },
  questionCounterText: {
    fontSize: 16,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    lineHeight: 24,
    letterSpacing: 0.64,
    textTransform: 'uppercase',
  },
  question: {
    fontSize: 20,
    color: COLORS.text,
    fontFamily: 'BricolageGrotesque-ExtraBold',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  buttonContainer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 31,
  },
});
