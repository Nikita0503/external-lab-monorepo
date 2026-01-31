import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    marginRight: 6,
  },
  buttonText: {
    color: COLORS.darkBlue,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default styles;
