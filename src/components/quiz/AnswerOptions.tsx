import Spacer from '@components/generals/Spacer';
import { COLORS } from '@constants/colors';
import { Answer } from 'src/models/question';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

type AnswerOptionsProps = {
  answers: Answer[];
  selectedAnswer: Answer[];
  onSelect: (answer: Answer) => void;
};

const AnswerOptions = ({
  answers,
  selectedAnswer,
  onSelect,
}: AnswerOptionsProps) => {
  const prefix = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <View style={styles.container}>
      {answers.map((answer, index) => {
        const isSelected = selectedAnswer.some((a) => a.label === answer.label);

        return (
          <View key={index}>
            <TouchableOpacity
              key={answer.label}
              onPress={() => onSelect(answer)}
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
    columnGap: 42,
    rowGap: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    paddingHorizontal: 7,
    paddingVertical: 6,
    maxWidth: '100%',
  },
  answerLabel: {
    fontSize: 14,
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    letterSpacing: 0.56,
    textTransform: 'uppercase',
    flexShrink: 1,
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
