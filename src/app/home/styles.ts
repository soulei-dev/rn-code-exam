import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontFamily: "BricolageGrotesque-ExtraBold",
    color: COLORS.primary,
    paddingHorizontal: 28,
    lineHeight: 41.6,
    letterSpacing: 0.32,
  },
  content: {
    paddingHorizontal: 15,
  },
  resultsTitle: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: COLORS.gray,

  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 121,
    backgroundColor: '#DEF7F9',
    borderRadius: 16,
    alignItems: 'center',
    paddingHorizontal: 16
  },
  listContentContainer: {
    paddingBottom: 150
  }
});

export default styles;