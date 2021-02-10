import styled from 'styled-components/native';

import CurrencyInput from 'react-native-currency-input';
import {TouchableOpacity} from 'react-native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: ${(props) =>
    props.tipo === 'Pagar' ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 255, 120, 0.8)'};

  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 152px;
  border-radius: 10px;
`;

export const TInput = styled(CurrencyInput).attrs({
  placeholderTextColor: 'rgba(0,0,0,0.6)',
})`
  flex: 1;
  font-size: 30px;
  margin-top: 70px;
  margin-left: 10px;
  color: ${(props) => (props.tipo === 'Pagar' ? '#fff' : '#201')};
`;
export const ButtonTop = styled(TouchableOpacity)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 30px;
  margin-top: 70px;
`;
export const ButtonReceita = styled(TouchableOpacity)``;
