import { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export interface IProps extends TextInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  hint: string;
  hintTextStyle?: TextStyle;
  textInputStyle?: ViewStyle;
  [key: string]: any;
}
