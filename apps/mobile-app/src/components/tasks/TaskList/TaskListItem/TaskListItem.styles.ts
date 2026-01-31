import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    backgroundColor: COLORS.white,
  },
  taskStatusContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    marginHorizontal: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    color: COLORS.darkBlue,
    fontWeight: '700',
    flexShrink: 1,
  },
  titleTextThrough: {
    textDecorationLine: 'line-through',
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionContainer: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 50,
    marginHorizontal: 8,
  },
});

export default styles;
