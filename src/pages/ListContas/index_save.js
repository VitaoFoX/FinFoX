import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {getMonth, getYear, format} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import {formatPrice} from '~/util/format';
import {
  Container,
  CenterPage,
  TitleResumo,
  ButtonTop,
  ListLancamento,
  Item,
  Titulo,
  Concat,
  SubTitulo,
  SubTituloValue,
} from './styles';

export default function ListContas() {
  const monthNames = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  const [month, setMonth] = useState(1);
  const [lancMes, setLancMes] = useState([]);
  const today = new Date();
  const lancDatas = [];
  const lancamentos = useSelector((state) => state.lancamento.lanc);

  function lancamentosData(somar) {
    const novaConsulta = lancamentos.map((lan) => {
      let dateLanc = new Date();
      dateLanc = new Date(lan.dateNew);
      if (
        getMonth(dateLanc) === month + somar &&
        getYear(dateLanc) === getYear(today)
      ) {
        lancDatas.push(lan);
      }
      console.tron.log(month + 1);
      return lancDatas;
    });
    setLancMes(lancDatas);
  }

  return (
    <Background>
      <Container>
        <CenterPage>
          <ButtonTop
            onPress={() => {
              if (month === 0) {
                setMonth(11);
                lancamentosData(-1);
              } else {
                setMonth(month - 1);
                lancamentosData(-1);
              }
            }}>
            <Icon name="chevron-left" size={35} color="#000" />
          </ButtonTop>
          <TitleResumo>{monthNames[month]}</TitleResumo>
          <ButtonTop
            onPress={() => {
              if (month === 11) {
                setMonth(0);
                lancamentosData(1);
              } else {
                setMonth(month + 1);
                lancamentosData(1);
              }
            }}>
            <Icon name="chevron-right" size={35} color="#000" />
          </ButtonTop>
        </CenterPage>
        <ListLancamento
          data={lancMes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Item>
              <Concat>
                <Titulo>Descrição:</Titulo>
                <SubTitulo>{item.descNew}</SubTitulo>
              </Concat>
              <Concat>
                <Titulo>Valor:</Titulo>
                <SubTituloValue tipo={item.tipo}>
                  {formatPrice(item.valueFormat.toFixed(2))}
                </SubTituloValue>
              </Concat>
              <Concat>
                <Titulo>Data:</Titulo>
                <SubTitulo>
                  {format(new Date(item.dateNew), 'dd/MM/yyyy')}
                </SubTitulo>
              </Concat>
              <Concat>
                <Titulo>Tipo:</Titulo>
                <SubTituloValue tipo={item.tipo}>{item.tipo}</SubTituloValue>
              </Concat>
            </Item>
          )}
        />
      </Container>
    </Background>
  );
}
