import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AnswerOptions from '@components/quiz/AnswerOptions';
import { Answer } from '@models/question';

describe('AnswerOptions', () => {
  const mockAnswers: Answer[] = [
    { label: 'Réponse 1' },
    { label: 'Réponse 2', correct: true },
    { label: 'Réponse 3' },
  ];

  const mockOnSelect = jest.fn();

  it('should correctly display all answers', () => {
    const { getByText } = render(
      <AnswerOptions
        answers={mockAnswers}
        selectedAnswer={[]}
        onSelect={mockOnSelect}
      />,
    );

    mockAnswers.forEach((answer) => {
      expect(getByText(answer.label)).toBeTruthy();
    });
  });

  it('should call onSelect with the correct answer when clicked', () => {
    const { getByText } = render(
      <AnswerOptions
        answers={mockAnswers}
        selectedAnswer={[]}
        onSelect={mockOnSelect}
      />,
    );

    const firstAnswer = getByText('Réponse 1');

    fireEvent.press(firstAnswer);

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith({ label: 'Réponse 1' });
  });
});
