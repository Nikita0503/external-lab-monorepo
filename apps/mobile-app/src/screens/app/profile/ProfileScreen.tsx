import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import CustomButton from '../../../components/CustomButton';
import Header from '../../../components/headers/Header';
import TextInputWithHint from '../../../components/TextInputWithHint';
import UniversalError from '../../../components/UniversalError';
import UniversalLoading from '../../../components/UniversalLoading';
import UserAvatar from '../../../components/UserAvatar';
import styles from './ProfileScreen.styles';
import { IProps } from './ProfileScreen.types';

const ProfileScreen = ({
  currentUser,
  error,
  loading,
  name,
  email,
  avatar,
  setName,
  setAvatar,
  fetchCurrentUser,
  onUpdateCurrentUserPress,
  onLogoutPress,
}: IProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Header title="Profile" hideBackButton={true} />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={fetchCurrentUser} />
        }
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        {loading && (
          <UniversalLoading loadingText="Your profile is loading..." />
        )}
        {!loading && error && (
          <UniversalError
            errorText="Something went wrong. Probably user was not found"
            buttonText="Update Profile"
            onHandleError={fetchCurrentUser}
          />
        )}
        {!error && !loading && currentUser && (
          <>
            <View>
              <UserAvatar avatar={avatar} setAvatar={setAvatar} />
              <View style={styles.textInputContainer}>
                <TextInputWithHint
                  hint="Name"
                  value={name}
                  onChangeText={setName}
                />
              </View>
              <View style={styles.textInputContainer}>
                <TextInputWithHint
                  hint="Email"
                  value={email}
                  editable={false}
                />
              </View>
            </View>
            <View>
              <CustomButton
                buttonStyle={styles.button}
                onPress={onUpdateCurrentUserPress}
              >
                Update
              </CustomButton>
              <CustomButton buttonStyle={styles.button} onPress={onLogoutPress}>
                Logout
              </CustomButton>
            </View>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default React.memo(ProfileScreen);
