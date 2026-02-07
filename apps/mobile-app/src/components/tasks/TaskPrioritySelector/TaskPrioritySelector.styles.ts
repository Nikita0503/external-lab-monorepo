import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  content: {
    flexDirection: 'row',
  },
  hintText: {
    color: '#464963',
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 2,
  },
  priorityContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DADBDD',
    padding: 8,
  },
  priorityContainerRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  priorityContainerLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRightWidth: 0,
  },
  priorityContainerLowPrioritySelected: {
    backgroundColor: '#00800140',
  },
  priorityContainerHighPrioritySelected: {
    backgroundColor: '#FF000040',
  },
});

export default styles;
