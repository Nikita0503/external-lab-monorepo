import { SCREEN_OPTIONS } from '../../constants/navigation';

import { createStackNavigator } from '@react-navigation/stack';
import { ERouteNames } from '../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../interfaces/navigation/routeParams';
import AddTaskScreen from '../../screens/app/AddTask';
import EditTaskScreen from '../../screens/app/EditTask';
import TaskDetailsScreen from '../../screens/app/TaskDetails';
import Tabs from '../Tabs';

const AppStack = createStackNavigator<AppStackParamList>();

const AppStackNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={SCREEN_OPTIONS}>
      <AppStack.Screen name={ERouteNames.TABS} component={Tabs} />
      <AppStack.Screen
        name={ERouteNames.TASK_DETAILS}
        component={TaskDetailsScreen}
      />
      <AppStack.Screen name={ERouteNames.ADD_TASK} component={AddTaskScreen} />
      <AppStack.Screen
        name={ERouteNames.EDIT_TASK}
        component={EditTaskScreen}
      />
    </AppStack.Navigator>
  );
};

export default AppStackNavigator;
