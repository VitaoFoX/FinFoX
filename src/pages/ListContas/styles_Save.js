import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const CenterPage = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-top: 20px;
`;

export const TitleResumo = styled.Text`
  font-weight: bold;
  font-size: 32px;
  color: #000;
  text-align: center;
`;
export const ButtonTop = styled(TouchableOpacity)`
  align-items: center;
  margin-top: 5px;
`;

export const ListLancamento = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 20},
})`
  margin-bottom: 30px;
`;

export const Item = styled.View`
  padding: 20px;
  border-radius: 12px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 20px;
`;
// justify-content: space-between;
export const Titulo = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #000;
  text-align: center;
  margin-right: 4px;
`;

export const SubTitulo = styled.Text`
  font-size: 15px;
  color: #000;
  text-align: center;
`;

export const SubTituloValue = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) =>
    props.tipo === 'Pagar' ? 'rgba(255, 0, 0, 0.8)' : 'rgb(0, 204, 3)'};
  text-align: center;
`;

export const Concat = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
