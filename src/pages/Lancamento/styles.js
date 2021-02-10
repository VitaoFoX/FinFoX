import styled from 'styled-components/native';
import {Platform} from 'react-native';
import Input from '~/components/Input';
import Input2 from '~/components/Input_Currency';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enable: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  margin-top: -5px;
`;
export const Form = styled.View`
  align-self: stretch;
`;
export const FormButton = styled.View`
  align-self: stretch;
  padding: 0 30px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const Campovalor = styled.SafeAreaView`
  flex: 1;
`;

export const FormCurrencyInput = styled(Input2)`
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const TextStyled = styled.Text`
  margin-left: 20px;
  font-size: 13px;
  font-weight: bold;
  color: rgba(21, 0, 123, 1);
`;

export const SubmitButton = styled(Button)`
  align-items: center;
  margin: 150px;
`;
