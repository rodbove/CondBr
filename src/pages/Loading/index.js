import React from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';

import { Container, Connection, BackgroundImage, Body, ReloadButton, ReloadButtonText } from './styles';

import backgroundImg from '../../assets/background.jpg'

export default function loading() {
  const navigation = useNavigation();

  const net = useNetInfo().isInternetReachable;

  function navigateToMain() {
    if (net) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Loading')
    }
  }

  return (
    <>
      <Container>
        <Connection>Sem conexão</Connection>
      </Container>
      <BackgroundImage source={backgroundImg}>
        <Body>
          <ActivityIndicator size="large" />
          <ReloadButton onPress={() => navigateToMain()}>
            <ReloadButtonText>Tentar novamente</ReloadButtonText>
          </ReloadButton>
        </Body>
      </BackgroundImage>
    </>
  );
}
