import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  height: 64px;
  width: 64px;
  background: #00ff00;
  border-radius: 32px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
