import { SPRINTS } from '@external-lab-monorepo/constants';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import TextInputWithHint from '../../../components/TextInputWithHint';
import UserAvatar from '../../../components/UserAvatar/UserAvatar';
import { PasswordDisplayMode } from '../../../constants/general';
import styles from './SignUpScreen.styles';
import { IProps } from './SignUpScreen.types';

const SignUpScreen = ({
  sprint,
  email,
  name,
  password,
  repeatPassword,
  avatar,
  passwordDisplayMode,
  setEmail,
  setName,
  setPassword,
  setRepeatPassword,
  setAvatar,
  togglePasswordDisplayMode,
  onSignUpPress,
  goToSignIn,
}: IProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.appLogoContainer}>
          <UserAvatar avatar={avatar} setAvatar={setAvatar} />
        </View>
        <View style={styles.textInputsContainer}>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Email"
              value={email}
              onChangeText={setEmail}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Name"
              value={name}
              onChangeText={setName}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Password"
              value={password}
              onChangeText={setPassword}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
              secureTextEntry={
                passwordDisplayMode === PasswordDisplayMode.HIDDEN
              }
              passwordDisplayMode={
                sprint === SPRINTS.SPRINT_4 ? passwordDisplayMode : undefined
              }
              togglePasswordDisplayMode={togglePasswordDisplayMode}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInputWithHint
              hint="Repeat password"
              value={repeatPassword}
              onChangeText={setRepeatPassword}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
              secureTextEntry={
                passwordDisplayMode === PasswordDisplayMode.HIDDEN
              }
            />
          </View>
        </View>
        <CustomButton buttonStyle={styles.button} onPress={onSignUpPress}>
          Sign Up
        </CustomButton>
        <CustomButton buttonStyle={styles.button} onPress={goToSignIn}>
          Go to Sign In
        </CustomButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default React.memo(SignUpScreen);
