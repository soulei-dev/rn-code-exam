import React from 'react';
import { render } from '@testing-library/react-native';
import ResultCard from '@components/cards/ResultCard';
import { formatDate } from '@utils/date';
import { MAX_QUESTIONS } from '@constants/quizConstants';

describe('ResultCard', () => {
  const mockDate = new Date(2025, 1, 25);
  const mockScore = 37;

  it('should display the correctly formatted date', () => {
    const formattedDate = formatDate(mockDate);

    const { getByText } = render(
      <ResultCard date={mockDate} score={mockScore} />,
    );

    expect(getByText(formattedDate)).toBeTruthy();
  });

  it("should display the score in 'score/MAX_QUESTIONS' format", () => {
    const { getByText } = render(
      <ResultCard date={mockDate} score={mockScore} />,
    );

    expect(getByText(`${mockScore}/${MAX_QUESTIONS}`)).toBeTruthy();
  });
});
