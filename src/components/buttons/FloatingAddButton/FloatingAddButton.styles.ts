import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

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
    bottom: 24
  },
  plus: {
    fontSize: 47.35,
    fontFamily: 'Poppins-Regular',
    color: COLORS.white,
    textTransform: 'uppercase',
  }
});

export default styles;