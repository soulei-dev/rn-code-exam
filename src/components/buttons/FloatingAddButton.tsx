import { COLORS } from '@constants/colors';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    borderRadius: 64 / 2,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 24,
  },
  plus: {
    fontSize: 47.35,
    fontFamily: 'Poppins-Regular',
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});
