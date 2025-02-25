import React from 'react';
import { render } from '@testing-library/react-native';
import QuizScore from '@components/quiz/QuizScore';
import { MAX_QUESTIONS } from '@constants/quizConstants';

describe('QuizScore Component', () => {
  it('renders correctly without crashing', () => {
    const { getByText } = render(<QuizScore score="30" />);
    expect(getByText('30')).toBeTruthy();
    expect(getByText('/')).toBeTruthy();
    expect(getByText(String(MAX_QUESTIONS))).toBeTruthy();
  });

  it('should displays the correct score', () => {
    const scoreValue = '10';
    const { getByText } = render(<QuizScore score={scoreValue} />);
    expect(getByText(scoreValue)).toBeTruthy();
  });

  it('renders the image', () => {
    const { getByTestId } = render(<QuizScore score="7" />);
    expect(getByTestId('quiz-score-image')).toBeTruthy();
  });
});
