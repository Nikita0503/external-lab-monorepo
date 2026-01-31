import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import BackButtonSvgImage from '../../../assets/icons/BackButtonSvgImage';
import { ERouteNames } from '../../../interfaces/navigation/routeNames';
import { AppStackParamList } from '../../../interfaces/navigation/routeParams';
import styles from './Header.styles';
import { IProps } from './Header.types';

const Header = ({ title, actionButton, hideBackButton }: IProps) => {
  const navigation = useNavigation<NavigationProp<AppStackParamList>>();

  const onPressBackButton = React.useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      // need to handle universal links proccess
      navigation.reset({
        index: 0,
        routes: [{ name: ERouteNames.TABS }],
      });
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      {!hideBackButton && (
        <Pressable style={styles.backButton} onPress={onPressBackButton}>
          <BackButtonSvgImage />
        </Pressable>
      )}
      <Text style={styles.titleText}>{title}</Text>
      {actionButton && (
        <Pressable style={styles.actionButton} onPress={actionButton.onPress}>
          <Text style={styles.actionButtonText}>{actionButton.title}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Header;
