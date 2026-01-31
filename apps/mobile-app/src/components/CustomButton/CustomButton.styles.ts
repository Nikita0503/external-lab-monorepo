import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 12,
  },
  buttonText: {
    color: COLORS.darkBlue,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
