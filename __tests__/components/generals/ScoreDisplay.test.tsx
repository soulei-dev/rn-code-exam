import React from 'react';
import { render } from '@testing-library/react-native';
import ScoreDisplay from '@components/generals/ScoreDisplay';
import { MAX_QUESTIONS } from '@constants/quizConstants';

describe('ScoreDisplay', () => {
  const mockScore = 35;
  const mockLabel = 'Meilleur score';

  it('should display the correct score', () => {
    const { getByText } = render(
      <ScoreDisplay score={mockScore} label={mockLabel} />,
    );

    expect(getByText(`${mockScore}/${MAX_QUESTIONS}`)).toBeTruthy();
  });

  it('should display the label in uppercase', () => {
    const { getByText } = render(
      <ScoreDisplay score={mockScore} label={mockLabel} />,
    );

    expect(getByText(mockLabel.toUpperCase())).toBeTruthy();
  });
});
