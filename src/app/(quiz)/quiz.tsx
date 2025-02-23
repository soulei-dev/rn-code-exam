import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuizScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Quiz Screen</Text>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
