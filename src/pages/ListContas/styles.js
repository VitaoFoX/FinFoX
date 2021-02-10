import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const CenterPage = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 15px;
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
  contentContainerStyle: {padding: 10},
})`
  margin-bottom: 30px;
`;

export const Item = styled(TouchableOpacity)`
  padding: 10px;
  border-radius: 12px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ViewModal = styled.View`
  padding: 10px;
  border-radius: 12px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
`;

// justify-content: space-between;
export const Titulo = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #000;
`;

export const SubTitulo = styled.Text`
  font-size: 15px;
  color: #000;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 5px;
`;
// #006622
export const SubTitle2 = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #000;
  text-align: left;
  margin-left: 20px;
`;

export const SubTitle3 = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) =>
    props.tipo === 'Pagar' ? 'rgba(255, 0, 0, 0.8)' : 'rgb(0, 204, 3)'};
  text-align: left;
  margin-right: 50px;
`;

export const SubTitle4 = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) =>
    props.total < 0 ? 'rgba(255, 0, 0, 0.8)' : 'rgb(0, 204, 3)'};
  text-align: left;
  margin-right: 50px;
`;

export const ContentTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TituloModal = styled.Text`
  font-size: 30px;
  color: #000;
  text-align: center;
  font-style: italic;
  margin-bottom: 10px;
`;

export const SubTituloValue = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) =>
    props.tipo === 'Pagar' ? 'rgba(255, 0, 0, 0.8)' : 'rgb(0, 204, 3)'};
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 100px;
`;

export const SubTituloValueModal = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) =>
    props.tipo === 'Pagar' ? 'rgba(255, 0, 0, 0.8)' : 'rgb(0, 204, 3)'};
  text-align: center;
`;

export const Concat = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonModal = styled(TouchableOpacity)`
  align-items: center;
  margin-top: 30px;
  margin-left: 60px;
  background: ${(props) =>
    props.tipo === 'Red' ? 'rgba(255, 0, 0, 0.8)' : '#00ace6'};
  border-radius: 32px;
  width: 200px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

export const TextModal = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
