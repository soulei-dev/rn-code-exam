import { MAX_QUESTIONS } from '@constants/quizConstants';
import questionsData from "@data/filtered_data.json";
import { Question } from '@models/question';


const categoryQuotas: Record<string, { min: number; max: number }> = {
  driver: { min: 6, max: 10 },
  safety: { min: 3, max: 4 },
  traffic: { min: 3, max: 4 },
  road: { min: 5, max: 7 },
  users: { min: 6, max: 8 },
  mechanical: { min: 4, max: 4 },
  car: { min: 3, max: 3 },
  miscellaneous: { min: 3, max: 3 },
  environment: { min: 3, max: 3 },
  first_aid: { min: 1, max: 1 },
};

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffleArray = <T>(array: T[]): T[] => {
  return array.sort(() => Math.random() - 0.5);
};

export const selectRandomQuestions = (): Question[] => {
  const flatQuestionsData = questionsData.flatMap(category => category[1].questions);
  console.log("Check length of flatQuestionsData: ", flatQuestionsData.length)

  const categorizedQuestions: Record<string, Question[]> = {};

  flatQuestionsData.forEach((question) => {
    const category = question.categorySlug;

    if (!categorizedQuestions[category]) {
      categorizedQuestions[category] = [];
    }
    categorizedQuestions[category].push(question);
  });

  let selectedQuestions: Question[] = [];

  for (const [category, { min, max }] of Object.entries(categoryQuotas)) {
    const availableQuestions = categorizedQuestions[category] || [];
    const count = Math.min(availableQuestions.length, getRandomInt(min, max));

    selectedQuestions.push(...shuffleArray(availableQuestions).slice(0, count));
    console.log("DEBUG selectedQuestions: ", JSON.stringify(selectedQuestions, null, 2))
  }

  if (selectedQuestions.length < MAX_QUESTIONS) {
    console.log('pas assez - ajouter questions')
    const remaining = Math.min(MAX_QUESTIONS - selectedQuestions.length, flatQuestionsData.length);
    
    selectedQuestions.push(...shuffleArray(flatQuestionsData).slice(0, remaining));
  }

  selectedQuestions = shuffleArray(selectedQuestions).slice(0, MAX_QUESTIONS);

  return selectedQuestions;
};
