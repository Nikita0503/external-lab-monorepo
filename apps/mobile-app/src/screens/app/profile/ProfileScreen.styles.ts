import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    justifyContent: 'space-between',
  },
  scrollViewContainer: {
    flexGrow: 1,
    padding: 12,
    paddingBottom: 0,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  infoContainer: {
    marginBottom: 8,
  },
  taskAddPhotoContainer: {},
  locationCheckBoxContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  taskTypesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTypeContainer: {
    marginBottom: 8,
    width: '100%',
  },
  taskTypesTitleText: {
    color: '#464963',
    fontSize: 14,
    fontWeight: '400',
    marginVertical: 6,
    width: '100%',
  },
  button: {
    backgroundColor: COLORS.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonText: {
    color: COLORS.darkBlue,
    fontSize: 18,
    fontWeight: '600',
  },
  textInputContainer: {
    marginBottom: 12,
  },
});

export default styles;
