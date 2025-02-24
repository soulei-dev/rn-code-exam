import { COLORS } from '@constants/colors';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

const CustomButton = ({ title, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: 224,
    height: 53,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: COLORS.white,
    fontFamily: 'BricolageGrotesque-SemiBold',
    lineHeight: 26,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
});
