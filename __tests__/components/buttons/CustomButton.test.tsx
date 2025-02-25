import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '@components/buttons/CustomButton';

describe('CustomButton', () => {
  const mockOnPress = jest.fn();

  it('should display the correct title', () => {
    const { getByText } = render(
      <CustomButton title="Title" onPress={mockOnPress} />,
    );

    expect(getByText('Title')).toBeTruthy();
  });

  it('should call onPress when clicked', () => {
    const { getByText } = render(
      <CustomButton title="Title" onPress={mockOnPress} />,
    );

    const button = getByText('Title');

    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
