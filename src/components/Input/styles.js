import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: #ffffff;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.6)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000;
`;
// rgba(239, 233, 245, 1)
