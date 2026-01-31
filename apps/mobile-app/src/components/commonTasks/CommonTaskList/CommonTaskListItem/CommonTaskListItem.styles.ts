import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    height: 70,
  },
  titleText: {
    fontSize: 18,
    color: COLORS.darkBlue,
    fontWeight: '700',
    flexShrink: 1,
  },
});

export default styles;
