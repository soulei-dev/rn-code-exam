import CustomButton from '@components/buttons/CustomButton';
import Spacer from '@components/generals/Spacer';
import QuizScore from '@components/quiz/QuizScore';
import { COLORS } from '@constants/colors';
import { RootState } from '@store/store';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const ResultsScreen = () => {
  const { isTestPassed } = useSelector((state: RootState) => state.quiz);
  const { correctAnswersCount } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Spacer size={193} />
      <QuizScore score={correctAnswersCount as string} />
      <Spacer size={30} />
      <Text style={styles.resultMessage}>
        {isTestPassed ? 'Bravo !' : 'Dommage !'}
      </Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.backMessage}>Retour aux résultats</Text>
        </TouchableOpacity>
        <Spacer size={20} />
        <CustomButton title="Nouvelle série" onPress={() => {}} />
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
