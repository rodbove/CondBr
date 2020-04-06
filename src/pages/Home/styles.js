import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;

export const BackgroundOverlay = styled.View`
  background: rgba(0, 0, 0, 0.0);
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BodyTitle = styled.Text`
  font-size: 56px;
  color: #FFF;
  margin-bottom: 10px;
`;

export const BodyText = styled.Text`
  color: #fff;
  text-align: center;
  max-width: 90%;
  font-size: 18px;
  font-weight: 500;
  margin: 20px 0;
`;

export const BodyButton = styled.TouchableOpacity`
  background: #199eb8;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const BodyButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const PolicyText = styled.Text`
  margin-top: 20px;
  font-size: 10px;
  color: #ccc;
`;



