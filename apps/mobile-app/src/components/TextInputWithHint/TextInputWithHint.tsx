import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import PasswordEyeCrossedSvgImage from '../../assets/icons/PasswordEyeCrossedSvgImage';
import PasswordEyeSvgImage from '../../assets/icons/PasswordEyeSvgImage';
import styles from './TextInputWithHint.styles';
import { IProps } from './TextInputWithHint.types';

const TextInputWithHint = ({
  value,
  onChangeText,
  hint,
  hintTextStyle,
  textInputStyle,
  secureTextEntry,
  passwordDisplayMode,
  togglePasswordDisplayMode,
  ...props
}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.hintText, hintTextStyle]}>{hint}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.textInput, textInputStyle]}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {passwordDisplayMode && (
        <Pressable
          style={styles.eyeIconContainer}
          onPress={togglePasswordDisplayMode}
        >
          {secureTextEntry ? (
            <PasswordEyeCrossedSvgImage />
          ) : (
            <PasswordEyeSvgImage />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default TextInputWithHint;
