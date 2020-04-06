import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #ff0000;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Connection = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ReloadButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 10px 20px;
  background: #199eb8;
  border-radius: 50px;
`;

export const ReloadButtonText = styled.Text`
  color: #FFF;
  font-size: 18px;
`;
