import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '@components/generals/Spacer';
import ScoreDisplay from '@components/generals/ScoreDisplay';
import ResultCard from '@components/cards/ResultCard';
import AddButton from '@components/buttons/FloatingAddButton';
import { COLORS } from '@constants/colors';
import { useRouter } from 'expo-router';
import { getQuizResult } from 'src/storages/quizStorage';
import { QuizResult } from '@models/question';

const HomeScreen = () => {
  const router = useRouter();

  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  const scores = quizResults.map((result) => result.score);
  const lastScore = scores.length ? scores[0] : 0;
  const bestScore = scores.length ? Math.max(...scores) : 0;
  const averageScore = scores.length
    ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    : 0;

  const dynamicScores = [
    { score: bestScore, label: 'Meilleur score' },
    { score: lastScore, label: 'Dernier score' },
    { score: averageScore, label: 'Score moyen' },
  ];

  const fetchResults = () => {
    const results = getQuizResult();
    const sortedResults = results.sort(
      (a: QuizResult, b: QuizResult) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    setQuizResults(sortedResults);
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <Spacer size={28} />
          <Text style={styles.title}>leTESTLIBRE</Text>
          <Spacer size={27} />
          <View style={styles.content}>
            <View style={styles.scoreContainer}>
              {dynamicScores.map((item, index) => (
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
              data={quizResults}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ResultCard date={new Date(item.date)} score={item.score} />
              )}
              ItemSeparatorComponent={() => <Spacer size={16} />}
              scrollEnabled={false}
              contentContainerStyle={styles.listContentContainer}
              ListEmptyComponent={() => (
                <Text style={styles.listEmptyMessage}>
                  Vous n'avez pas encore passé de test
                </Text>
              )}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
      <AddButton onPress={() => router.push('/quiz')} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontFamily: 'BricolageGrotesque-ExtraBold',
    color: COLORS.primary,
    paddingHorizontal: 28,
    lineHeight: 41.6,
    letterSpacing: 0.32,
  },
  content: {
    paddingHorizontal: 15,
  },
  resultsTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: COLORS.gray,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 121,
    backgroundColor: '#DEF7F9',
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  listContentContainer: {
    paddingBottom: 150,
  },
  listEmptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'BricolageGrotesque-SemiBold',
    color: COLORS.text,
  },
});
