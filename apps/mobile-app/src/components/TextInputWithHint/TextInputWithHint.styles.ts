import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  hintText: {
    color: '#464963',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 2,
  },
  textInput: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DADBDD',
    paddingHorizontal: 12,
    height: 50,
    color: COLORS.black,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 12,
    top: 35,
  },
});

export default styles;
