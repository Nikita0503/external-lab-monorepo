import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import AppLogoSvgImage from '../../../assets/AppLogoSvgImage';
import CustomButton from '../../../components/CustomButton';
import TextInputWithHint from '../../../components/TextInputWithHint';
import { PasswordDisplayMode } from '../../../constants/general';
import styles from './SignInScreen.styles';
import { IProps } from './SignInScreen.types';

const SignInScreen = ({
  email,
  password,
  passwordDisplayMode,
  setEmail,
  setPassword,
  togglePasswordDisplayMode,
  onLoginPress,
  goToSignUp,
  showDevMenu,
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
          <Pressable onPress={showDevMenu}>
            <AppLogoSvgImage />
          </Pressable>
          <Text style={styles.appLogoText}>Welcome!</Text>
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
              hint="Password"
              value={password}
              onChangeText={setPassword}
              hintTextStyle={styles.textInputTitle}
              textInputStyle={styles.textInput}
              secureTextEntry={
                passwordDisplayMode === PasswordDisplayMode.HIDDEN
              }
              passwordDisplayMode={passwordDisplayMode}
              togglePasswordDisplayMode={togglePasswordDisplayMode}
            />
          </View>
        </View>
        <CustomButton buttonStyle={styles.button} onPress={onLoginPress}>
          Log in
        </CustomButton>
        <CustomButton buttonStyle={styles.button} onPress={goToSignUp}>
          Go to Sign Up
        </CustomButton>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default React.memo(SignInScreen);
