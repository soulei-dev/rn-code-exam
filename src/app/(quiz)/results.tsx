import CustomButton from '@components/buttons/CustomButton';
import Spacer from '@components/generals/Spacer';
import QuizScore from '@components/quiz/QuizScore';
import { COLORS } from '@constants/colors';
import { resetQuiz } from '@store/quizSlice';
import { RootState } from '@store/store';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const ResultsScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isTestPassed } = useSelector((state: RootState) => state.quiz);
  const { correctAnswersCount } = useLocalSearchParams();

  const handleRestartQuiz = () => {
    dispatch(resetQuiz());
    router.push('/quiz');
  };

  const handleReturnToHomeScreen = () => {
    dispatch(resetQuiz());
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Spacer size={193} />
      <QuizScore score={correctAnswersCount as string} />
      <Spacer size={30} />
      <Text style={styles.resultMessage}>
        {isTestPassed ? 'Bravo !' : 'Dommage !'}
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleReturnToHomeScreen}>
          <Text style={styles.backMessage}>Retour aux résultats</Text>
        </TouchableOpacity>
        <Spacer size={20} />
        <CustomButton title="Nouvelle série" onPress={handleRestartQuiz} />
      </View>
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  resultMessage: {
    fontSize: 32,
    fontFamily: 'BricolageGrotesque-ExtraBold',
    color: COLORS.black,
  },
  footer: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 31,
  },
  backMessage: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'BricolageGrotesque-SemiBold',
    color: COLORS.text,
  },
});
