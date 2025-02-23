import React from 'react';
import { Text, ScrollView, View, FlatList } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '@components/generals/Spacer/Spacer';
import ScoreDisplay from '@components/generals/ScoreDisplay/ScoreDisplay';
import ResultCard from '@components/cards/ResultCard/ResultCard';
import AddButton from '@components/buttons/FloatingAddButton/FloatingAddButton';

const HomeScreen = () => {
  const mockScores = [
    { score: 37, label: 'Meilleure score' },
    { score: 28, label: 'Dernier score' },
    { score: 26, label: 'Score moyen' },
  ];

  const mockResults = [
    { id: '1', date: new Date(2025, 1, 10, 14, 30), score: 37 },
    { id: '2', date: new Date(2025, 0, 25, 9, 45), score: 32 },
    { id: '3', date: new Date(2024, 11, 18, 16, 10), score: 29 },
    { id: '4', date: new Date(2024, 10, 5, 11, 20), score: 24 },
    { id: '5', date: new Date(2024, 9, 20, 17, 55), score: 30 },
    { id: '6', date: new Date(2024, 9, 20, 17, 55), score: 30 },
    { id: '7', date: new Date(2024, 9, 20, 17, 55), score: 30 },
    { id: '8', date: new Date(2024, 9, 20, 17, 55), score: 30 },
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Spacer size={28} />
          <Text style={styles.title}>leTESTLIBRE</Text>
          <Spacer size={27} />
          <View style={styles.content}>
            <View style={styles.scoreContainer}>
              {mockScores.map((item, index) => (
                <ScoreDisplay
                  key={index}
                  score={item.score}
                  label={item.label}
                />
              ))}
            </View>
            <Spacer size={36} />
            <Text style={styles.resultsTitle}>RÉSULTATS</Text>
            <Spacer size={11} />
            <FlatList
              data={mockResults}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ResultCard date={item.date} score={item.score} />
              )}
              ItemSeparatorComponent={() => <Spacer size={16} />}
              scrollEnabled={false}
              contentContainerStyle={styles.listContentContainer}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      <AddButton onPress={() => {}} />
    </>
  );
};

export default HomeScreen;
