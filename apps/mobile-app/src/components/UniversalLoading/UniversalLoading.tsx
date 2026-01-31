import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import CustomButton from '../CustomButton';
import styles from './UniversalLoading.styles';
import { IProps } from './UniversalLoading.types';

const UniversalLoading = ({
  loadingText,
  buttonText,
  onHandleLoading,
}: IProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/8999/8999447.png',
        }}
        style={styles.loadingImage}
      />
      <Text style={styles.loadingText}>{loadingText}</Text>
      <ActivityIndicator size="large" />
      {buttonText && onHandleLoading && (
        <CustomButton
          buttonStyle={styles.loadingButton}
          onPress={onHandleLoading}
        >
          {buttonText}
        </CustomButton>
      )}
    </View>
  );
};

export default UniversalLoading;
