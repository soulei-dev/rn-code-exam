import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FloatingAddButton from '@components/buttons/FloatingAddButton';

describe('FloatingAddButton', () => {
  const mockOnPress = jest.fn();

  it("should display the '+' symbol", () => {
    const { getByText } = render(<FloatingAddButton onPress={mockOnPress} />);

    expect(getByText('+')).toBeTruthy();
  });

  it('should call onPress when clicked', () => {
    const { getByText } = render(<FloatingAddButton onPress={mockOnPress} />);

    const button = getByText('+');

    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
