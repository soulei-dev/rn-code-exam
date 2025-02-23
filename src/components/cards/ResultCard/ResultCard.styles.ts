import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 71,
    backgroundColor: '#F4F4F4',
    borderRadius: 16,
    paddingHorizontal: 36,
    justifyContent: 'space-between'
  },
  date: {
    fontFamily: 'BricolageGrotesque-Regular',
    color: COLORS.text,
    fontSize: 16,
    lineHeight: 20.8,
    letterSpacing: 0.16
  },
  score: {
    fontFamily: 'BricolageGrotesque-ExtraBold',
    color: COLORS.text,
    fontSize: 18,
    lineHeight: 23.4,
    letterSpacing: 0.18
  }
});

export default styles;