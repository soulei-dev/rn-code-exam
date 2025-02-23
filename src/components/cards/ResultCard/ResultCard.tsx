import React from 'react';
import { View, Text } from 'react-native';
import styles from './ResultCard.styles';
import { formatDate } from '@utils/date';
import { QUIZ_MAX_SCORE } from '@constants/quizConstants';

type ResultCardProps = {
  date: Date;
  score: number;
};

const ResultCard = ({ date, score }: ResultCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.score}>{`${score}/${QUIZ_MAX_SCORE}`}</Text>
    </View>
  );
};

export default ResultCard;
