import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './FloatingAddButton.styles';

type FloatingAddButtonProps = {
  onPress: () => void;
};

const FloatingAddButton = ({ onPress }: FloatingAddButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
};

export default FloatingAddButton;
