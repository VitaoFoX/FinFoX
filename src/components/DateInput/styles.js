import styled from 'styled-components';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #ffffff;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const DateButton = styled.TouchableOpacity`
  height: 46px;
  width: 310px;
  background: #ffffff;
  border-radius: 4px;
  flex-direction: row;
  margin-left: 10px;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #000;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background: #000;
  padding: 15px 30px;
  margin-top: 30px;
`;
