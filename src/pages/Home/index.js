import React from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { Linking, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, BackgroundImage, BackgroundOverlay, BodyTitle, BodyText, BodyButton, BodyButtonText, PolicyText } from './styles';

import backgroundImg from '../../assets/background.jpg'

export default function Home() {
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
    <Container>
      <BackgroundImage source={backgroundImg}>
        <BackgroundOverlay>
          <BodyTitle>CondBr</BodyTitle>
          <BodyText>Criado para que as informações possam ser visualizadas por voce, em qualquer local.</BodyText>
          <BodyText>Pode ser Integrado ao Software Sentinela X New.</BodyText>
          <BodyButton>
            <BodyButtonText onPress={() => navigateToMain()}>
              Comece agora!
            </BodyButtonText>
          </BodyButton>
          <PolicyText>
            Ao utilizar esse app você está de acordo com nossa <Text style={{ color: '#199eb8' }}
              onPress={() => Linking.openURL('https://condbr.flycricket.io/privacy.html')}
              >Política de Privacidade</Text>.
          </PolicyText>
        </BackgroundOverlay>
      </BackgroundImage>
    </Container>
  );
}
