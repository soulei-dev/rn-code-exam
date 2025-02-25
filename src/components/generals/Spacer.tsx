import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

type SpacerProps = {
  size: number | string;
  horizontal?: boolean;
};

const Spacer = ({ horizontal = false, size }: SpacerProps) => {
  const defaultValue: string | number = 'auto';

  const style = {
    width: horizontal ? size : defaultValue,
    height: !horizontal ? size : defaultValue,
  };

  return <View testID="spacer" style={style as StyleProp<ViewStyle>} />;
};

export default Spacer;
