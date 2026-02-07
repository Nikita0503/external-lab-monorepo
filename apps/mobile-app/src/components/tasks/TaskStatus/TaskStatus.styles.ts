import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';

const styles = StyleSheet.create({
  taskStatusContainer: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  taskStatusContainerDone: {
    backgroundColor: COLORS.green,
  },
  taskStatusContainerInProgress: {
    backgroundColor: COLORS.blue,
  },
  taskStatusText: {
    fontSize: 14,
    color: COLORS.white,
  },
});

export default styles;
