import { NavigatorScreenParams } from '@react-navigation/native';
import { ERouteNames } from './routeNames';

export type AuthStackParamList = {
  [ERouteNames.SIGN_IN_SCREEN]: undefined;
  [ERouteNames.SIGN_UP_SCREEN]: undefined;
};

export type AppStackParamList = {
  [ERouteNames.TABS]: NavigatorScreenParams<TabsStackParamList>;
  [ERouteNames.TASK_DETAILS]: { taskId: string };
  [ERouteNames.ADD_TASK]: undefined;
  [ERouteNames.EDIT_TASK]: { taskId: string };
};

export type TabsStackParamList = {
  [ERouteNames.TASKS_SCREEN]: undefined;
  [ERouteNames.PROFILE_SCREEN]: undefined;
  [ERouteNames.COMMON_TASKS_SCREEN]: undefined;
};
