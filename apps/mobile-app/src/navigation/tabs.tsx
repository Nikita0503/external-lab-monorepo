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
import CommonTasksScreen from '../screens/app/CommonTasks';
import ProfileScreen from '../screens/app/Profile';
import TasksScreen from '../screens/app/Tasks';

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const Tabs = () => {
  return (
    <TabsStack.Navigator>
      <TabsStack.Screen
        name={ERouteNames.TASKS_SCREEN}
        component={TasksScreen}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ focused }) =>
            focused ? <TasksScreenTabActive /> : <TasksScreenTabInactive />,
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) =>
            focused ? <ProfileScreenTabActive /> : <ProfileScreenTabInactive />,
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.COMMON_TASKS_SCREEN}
        component={CommonTasksScreen}
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
