import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './CustomButton.styles';
import { IProps } from './CustomButton.types';

const CustomButton = ({
  children,
  onPress,
  buttonStyle,
  buttonTextStyle,
}: IProps) => {
  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, buttonTextStyle]}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
