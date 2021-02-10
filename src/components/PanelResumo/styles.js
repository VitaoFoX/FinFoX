import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled(TouchableOpacity)`
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Grafico = styled.View`
  width: 60px;
  height: 50px;
  border-radius: 25px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 20px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #000;
`;

export const Time = styled.Text`
  color: #003;
  font-size: 15px;
  margin-top: 4px;
`;
