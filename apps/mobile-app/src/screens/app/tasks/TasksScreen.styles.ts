import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    marginBottom: 8,
  },
});

export default styles;
