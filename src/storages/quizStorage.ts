import { MMKV } from 'react-native-mmkv'
import uuid from 'react-native-uuid';

const QUIZ_RESULTS_KEY = "quiz_results";

export const storage = new MMKV()

export const storeQuizResult = (score: number) => {
  const newResult = {
    id: uuid.v4(),
    score,
    date: new Date().toISOString()
  };

  const existingData = storage.getString(QUIZ_RESULTS_KEY);
  const quizResults = existingData ? JSON.parse(existingData) : [];

  quizResults.push(newResult);

  storage.set(QUIZ_RESULTS_KEY, JSON.stringify(quizResults));
};

export const getQuizResult = () => {
  const jsonValue = storage.getString(QUIZ_RESULTS_KEY);

  return jsonValue ? JSON.parse(jsonValue) : [];
};