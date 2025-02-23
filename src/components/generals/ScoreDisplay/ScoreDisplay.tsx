import React from 'react';
import { View, Text } from 'react-native';
import styles from './ScoreDisplay.styles';
import { QUIZ_MAX_SCORE } from '@constants/quizConstants';
import Spacer from '../Spacer/Spacer';

type ScoreDisplayProps = {
  score: number;
  label: string;
};

const ScoreDisplay = ({ score, label }: ScoreDisplayProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{`${score}/${QUIZ_MAX_SCORE}`}</Text>
      <Spacer size={8} />
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </View>
  );
};

export default ScoreDisplay;
