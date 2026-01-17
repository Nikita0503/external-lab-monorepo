import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CommonTasksScreenTabActive from '../assets/icons/tabs/CommonTasksScreenTabActive';
import CommonTasksScreenTabInactive from '../assets/icons/tabs/CommonTasksScreenTabInactive';
import ProfileScreenTabActive from '../assets/icons/tabs/ProfileScreenTabActive';
import ProfileScreenTabInactive from '../assets/icons/tabs/ProfileScreenTabInactive';
import TasksScreenTabActive from '../assets/icons/tabs/TasksScreenTabActive';
import TasksScreenTabInactive from '../assets/icons/tabs/TasksScreenTabInactive';
import { ERouteNames } from '../interfaces/navigation/routeNames';
import { TabsStackParamList } from '../interfaces/navigation/routeParams';
import CommonTasksContainer from '../screens/app/CommonTasks/CommonTasksContainer';
import ProfileContainer from '../screens/app/Profile/ProfileContainer';
import TasksContainer from '../screens/app/Tasks/TasksContainer';

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const Tabs = () => {
  return (
    <TabsStack.Navigator screenOptions={{ headerShown: false }}>
      <TabsStack.Screen
        name={ERouteNames.TASKS_SCREEN}
        component={TasksContainer}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ focused }) =>
            focused ? <TasksScreenTabActive /> : <TasksScreenTabInactive />,
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.CURRENT_USER}
        component={ProfileContainer}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileScreenTabActive /> : <ProfileScreenTabInactive />,
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.COMMON_TASKS_SCREEN}
        component={CommonTasksContainer}
        options={{
          tabBarLabel: 'Common Tasks',
          tabBarIcon: ({ focused }) =>
            focused ? (
              <CommonTasksScreenTabActive />
            ) : (
              <CommonTasksScreenTabInactive />
            ),
        }}
      />
    </TabsStack.Navigator>
  );
};

export default Tabs;
