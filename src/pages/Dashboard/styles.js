import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ButtonTop = styled(TouchableOpacity)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-right: 30px;
  margin-top: 10px;
`;

export const TitleResumo = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: #000;
  text-align: center;
  margin-left: 10px;
  margin-top: 30px;
`;

export const PanelChart = styled.View`
  flex: 1;
  margin-top: 40px;
  padding: 0 40px;
`;

export const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: ${(props) =>
    props.valor < 0 ? 'rgba(255, 0, 0, 0.8)' : 'rgb(0, 204, 3)'};

  text-align: left;
  margin-left: 10px;
  text-align: center;
`;
export const SubTitle2 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #006622;
  text-align: left;
  margin-top: 7px;
  margin-left: 11px;
`;

export const DashList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding: 30},
})`
  margin-bottom: 30px;
`;
