import { SPRINTS } from '@external-lab-monorepo/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CommonTasksScreenTabActive from '../assets/icons/tabs/CommonTasksScreenTabActive';
import CommonTasksScreenTabInactive from '../assets/icons/tabs/CommonTasksScreenTabInactive';
import ProfileScreenTabActive from '../assets/icons/tabs/ProfileScreenTabActive';
import ProfileScreenTabInactive from '../assets/icons/tabs/ProfileScreenTabInactive';
import TasksScreenTabActive from '../assets/icons/tabs/TasksScreenTabActive';
import TasksScreenTabInactive from '../assets/icons/tabs/TasksScreenTabInactive';
import { useDevMenu } from '../contexts/DevMenuContext';
import { ERouteNames } from '../interfaces/navigation/routeNames';
import { TabsStackParamList } from '../interfaces/navigation/routeParams';
import CommonTasksScreen from '../screens/app/CommonTasks';
import ProfileScreen from '../screens/app/Profile';
import TasksScreen from '../screens/app/Tasks';
import StubScreen from '../screens/stubs/Stub';

const TabsStack = createBottomTabNavigator<TabsStackParamList>();

const renderTabIcon =
  (ActiveIcon: React.ComponentType, InactiveIcon: React.ComponentType) =>
  ({ focused }: { focused: boolean }) =>
    focused ? <ActiveIcon /> : <InactiveIcon />;

const Tabs = () => {
  const { sprint } = useDevMenu();

  const CommonTasksScreenContent = React.useMemo(() => {
    if (sprint === SPRINTS.SPRINT_1 || sprint === SPRINTS.SPRINT_2) {
      return StubScreen;
    }
    return CommonTasksScreen;
  }, [sprint]);

  return (
    <TabsStack.Navigator>
      <TabsStack.Screen
        name={ERouteNames.TASKS_SCREEN}
        component={TasksScreen}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: renderTabIcon(
            TasksScreenTabActive,
            TasksScreenTabInactive,
          ),
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: renderTabIcon(
            ProfileScreenTabActive,
            ProfileScreenTabInactive,
          ),
        }}
      />
      <TabsStack.Screen
        name={ERouteNames.COMMON_TASKS_SCREEN}
        component={CommonTasksScreenContent}
        options={{
          tabBarLabel: 'Common Tasks',
          tabBarIcon: renderTabIcon(
            CommonTasksScreenTabActive,
            CommonTasksScreenTabInactive,
          ),
        }}
      />
    </TabsStack.Navigator>
  );
};

export default Tabs;
