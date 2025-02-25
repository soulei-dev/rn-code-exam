import { COLORS } from '@constants/colors';
import { MAX_QUESTIONS } from '@constants/quizConstants';
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

type QuizScoreProps = {
  score: string;
};

const QuizScore = ({ score }: QuizScoreProps) => {
  return (
    <View style={styles.container}>
      <Image
        testID="quiz-score-image"
        source={require('@assets/images/star.png')}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.backSlash}>/</Text>
        <Text style={styles.maxScore}>{MAX_QUESTIONS}</Text>
      </View>
    </View>
  );
};

export default QuizScore;

const styles = StyleSheet.create({
  container: {
    width: 151,
    height: 155,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
  },
  score: {
    fontSize: 29,
    fontFamily: 'BricolageGrotesque-ExtraBold',
    color: COLORS.black,
  },
  backSlash: {
    fontSize: 39,
    fontFamily: 'BricolageGrotesque-Regular',
    color: COLORS.black,
  },
  maxScore: {
    fontSize: 24,
    fontFamily: 'BricolageGrotesque-SemiBold',
    color: COLORS.black,
  },
});
