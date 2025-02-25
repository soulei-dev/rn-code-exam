import React from 'react';
import { render } from '@testing-library/react-native';
import Spacer from '@components/generals/Spacer';

describe('Spacer', () => {
  it('should apply vertical spacing correctly', () => {
    const { getByTestId } = render(<Spacer size={20} />);

    const spacer = getByTestId('spacer');

    expect(spacer.props.style.height).toBe(20);
    expect(spacer.props.style.width).toBe('auto');
  });

  it('should apply horizontal spacing correctly', () => {
    const { getByTestId } = render(<Spacer size={20} horizontal />);

    const spacer = getByTestId('spacer');

    expect(spacer.props.style.width).toBe(20);
    expect(spacer.props.style.height).toBe('auto');
  });
});
