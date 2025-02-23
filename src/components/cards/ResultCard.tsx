import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { formatDate } from '@utils/date';
import { MAX_QUESTIONS } from '@constants/quizConstants';
import { COLORS } from '@constants/colors';

type ResultCardProps = {
  date: Date;
  score: number;
};

const ResultCard = ({ date, score }: ResultCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{formatDate(date)}</Text>
      <Text style={styles.score}>{`${score}/${MAX_QUESTIONS}`}</Text>
    </View>
  );
};

export default ResultCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 71,
    backgroundColor: '#F4F4F4',
    borderRadius: 16,
    paddingHorizontal: 36,
    justifyContent: 'space-between',
  },
  date: {
    fontFamily: 'BricolageGrotesque-Regular',
    color: COLORS.text,
    fontSize: 16,
    lineHeight: 20.8,
    letterSpacing: 0.16,
  },
  score: {
    fontFamily: 'BricolageGrotesque-ExtraBold',
    color: COLORS.text,
    fontSize: 18,
    lineHeight: 23.4,
    letterSpacing: 0.18,
  },
});
