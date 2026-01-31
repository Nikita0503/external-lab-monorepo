import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './TextInputWithHint.styles';
import { IProps } from './TextInputWithHint.types';

const TextInputWithHint = ({
  value,
  onChangeText,
  hint,
  hintTextStyle,
  textInputStyle,
  ...props
}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.hintText, hintTextStyle]}>{hint}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.textInput, textInputStyle]}
        {...props}
      />
    </View>
  );
};

export default TextInputWithHint;
