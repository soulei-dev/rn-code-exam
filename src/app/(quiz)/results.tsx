import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsScreen = () => {
  const { correctAnswersCount } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Results screen</Text>
      <Text>{`Correct Answer count = ${correctAnswersCount}`}</Text>
    </View>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
