import CountdownCircle from '@components/quiz/CountdownCircle';
import Spacer from '@components/generals/Spacer';
import { COLORS } from '@constants/colors';
import { MAX_QUESTIONS } from '@constants/quizConstants';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnswerOptions from '@components/quiz/AnswerOptions';
import CustomButton from '@components/buttons/CustomButton';
import { useRouter } from 'expo-router';

const mockQuestion = {
  id: '1',
  question: 'Dans un bouchon',
  questionPart1: 'Je peux lire un texto rapidement :',
  questionPart2: 'Si je suis arrêté au feu rouge ?',
  answers: [
    { label: 'Oui' },
    { correct: true, label: 'Non' },
    { label: 'Oui' },
    { correct: true, label: 'Non' },
  ],
};

const QuizScreen = () => {
  const [selectedAnswersSingle, setSelectedAnswersSingle] = useState<string[]>(
    [],
  );
  const [selectedAnswersPart1, setSelectedAnswersPart1] = useState<string[]>(
    [],
  );
  const [selectedAnswersPart2, setSelectedAnswersPart2] = useState<string[]>(
    [],
  );

  const hasQuestionParts =
    mockQuestion.questionPart1 && mockQuestion.questionPart2;

  const answersPart1 = hasQuestionParts
    ? mockQuestion.answers.slice(0, mockQuestion.answers.length / 2)
    : [];
  const answersPart2 = hasQuestionParts
    ? mockQuestion.answers.slice(mockQuestion.answers.length / 2)
    : [];

  const handleSelectedAnswer = (
    answer: string,
    part: 'single' | 'part1' | 'part2',
  ) => {
    if (!hasQuestionParts) {
      setSelectedAnswersSingle((prev) =>
        prev.includes(answer)
          ? prev.filter((a) => a !== answer)
          : [...prev, answer],
      );
    } else if (part === 'part1') {
      setSelectedAnswersPart1((prev) =>
        prev.includes(answer)
          ? prev.filter((a) => a !== answer)
          : [...prev, answer],
      );
    } else {
      setSelectedAnswersPart2((prev) =>
        prev.includes(answer)
          ? prev.filter((a) => a !== answer)
          : [...prev, answer],
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spacer size={68} />
      <View style={styles.questionHeader}>
        <Text
          style={styles.questionCounterText}
        >{`Question 01/${MAX_QUESTIONS}`}</Text>
        <CountdownCircle duration={20} />
      </View>
      <Spacer size={49} />
      {hasQuestionParts ? (
        <>
          <Text style={styles.question}>{mockQuestion.question}</Text>
          <Spacer size={33} />
          <Text style={styles.question}>{mockQuestion.questionPart1}</Text>
          <Spacer size={20} />
          <AnswerOptions
            answers={answersPart1}
            selectedAnswer={selectedAnswersPart1}
            onSelect={handleSelectedAnswer}
            part="part1"
          />
          <Spacer size={20} />
          <Text style={styles.question}>{mockQuestion.questionPart2}</Text>
          <Spacer size={20} />
          <AnswerOptions
            answers={answersPart2}
            selectedAnswer={selectedAnswersPart2}
            onSelect={handleSelectedAnswer}
            part="part2"
          />
        </>
      ) : (
        <>
          <Text style={styles.question}>{mockQuestion.question}</Text>
          <Spacer size={20} />
          <AnswerOptions
            answers={mockQuestion.answers}
            selectedAnswer={selectedAnswersSingle}
            onSelect={handleSelectedAnswer}
            part="single"
          />
        </>
      )}
      <Spacer size={20} />
      <View style={styles.buttonContainer}>
        <CustomButton title="Valider" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
