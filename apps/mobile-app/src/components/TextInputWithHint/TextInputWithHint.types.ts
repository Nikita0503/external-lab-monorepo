import { TextInputProps, TextStyle, ViewStyle } from 'react-native';
import { PasswordDisplayMode } from '../../constants/general';

export interface IProps extends TextInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  hint: string;
  hintTextStyle?: TextStyle;
  textInputStyle?: ViewStyle;
  passwordDisplayMode?: PasswordDisplayMode;
  togglePasswordDisplayMode?: () => void;
  [key: string]: any;
}
