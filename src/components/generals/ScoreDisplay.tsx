import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MAX_QUESTIONS } from '@constants/quizConstants';
import Spacer from './Spacer';
import { COLORS } from '@constants/colors';

type ScoreDisplayProps = {
  score: number;
  label: string;
};

const ScoreDisplay = ({ score, label }: ScoreDisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{`${score}/${MAX_QUESTIONS}`}</Text>
      <Spacer size={8} />
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </View>
  );
};

export default ScoreDisplay;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  score: {
    color: COLORS.text,
    fontFamily: 'BricolageGrotesque-ExtraBold',
    fontSize: 18,
    letterSpacing: 0.18,
    lineHeight: 23.4,
  },
  label: {
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0.48,
    lineHeight: 18,
    maxWidth: 80,
  },
});
