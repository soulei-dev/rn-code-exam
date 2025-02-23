import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  score: {
    color: COLORS.text,
    fontFamily: 'BricolageGrotesque-ExtraBold',
    fontSize: 18,
    letterSpacing: 0.18,
    lineHeight: 23.4,
  },
  label: {
    color: COLORS.gray,
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0.48,
    lineHeight: 18,
    maxWidth: 80
  }
});

export default styles;