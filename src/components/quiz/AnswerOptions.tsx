import Spacer from '@components/generals/Spacer';
import { COLORS } from '@constants/colors';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

type Answer = {
  correct?: boolean;
  label: string;
};

type AnswerOptionsProps = {
  answers: Answer[];
  selectedAnswer: string[];
  onSelect: (answer: string, part: 'single' | 'part1' | 'part2') => void;
  part: 'single' | 'part1' | 'part2';
};

const AnswerOptions = ({
  answers,
  selectedAnswer,
  onSelect,
  part = 'single',
}: AnswerOptionsProps) => {
  const prefix = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <View style={styles.container}>
      {answers.map((answer, index) => {
        const isSelected = selectedAnswer.includes(answer.label);

        return (
          <View key={index}>
            <TouchableOpacity
              key={answer.label}
              onPress={() => onSelect(answer.label, part)}
              style={[
                styles.answerContainer,
                isSelected && styles.selectedAnswer,
              ]}
            >
              <View
                style={[
                  styles.prefixContainer,
                  isSelected && styles.selectedPrefixContainer,
                ]}
              >
                <Text
                  style={[
                    styles.prefixLabel,
                    isSelected && styles.selectedPrefixLabel,
                  ]}
                >
                  {prefix[index]}
                </Text>
              </View>
              <Spacer horizontal size={12} />
              <Text
                style={[
                  styles.answerLabel,
                  isSelected && styles.selectedAnswerLabel,
                ]}
              >
                {answer.label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default AnswerOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 42,
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 103,
    height: 43,
    borderRadius: 14,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingHorizontal: 7,
  },
  answerLabel: {
    fontSize: 14,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    letterSpacing: 0.56,
    textTransform: 'uppercase',
  },
  prefixContainer: {
    width: 33,
    height: 33,
    borderRadius: 14,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prefixLabel: {
    fontSize: 16,
    color: COLORS.text,
    fontFamily: 'BricolageGrotesque-ExtraBold',
    lineHeight: 20.8,
    letterSpacing: 0.16,
  },
  selectedAnswer: {
    borderColor: COLORS.primary,
  },
  selectedAnswerLabel: {
    color: '#950037',
  },
  selectedPrefixContainer: {
    backgroundColor: '#FFECF3',
  },
  selectedPrefixLabel: {
    color: COLORS.primary,
  },
});
