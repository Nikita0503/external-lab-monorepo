import { TextStyle, ViewStyle } from 'react-native';

export interface IProps {
  children: string;
  onPress?: () => void;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
}
