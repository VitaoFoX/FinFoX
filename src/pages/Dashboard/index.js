import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getMonth, getYear} from 'date-fns';
import Charts from '~/components/Charts';
import Background from '~/components/Background';
import {formatPrice} from '~/util/format';
import PanelResumo from '~/components/PanelResumo';
import {
  Container,
  ButtonTop,
  TitleResumo,
  SubTitle,
  PanelChart,
  DashList,
} from './styles';

export default function Dashboard({navigation}) {
  // reduz o array em um unico objeto, chamado total2
  /* const total = useSelector((state) =>
    formatPrice(
      state.lancamento.lanc.reduce(
        (total2, lanc) => total2 + lanc.valueFormat,
        0,
      ),
    ),
  ); */

  const lancamentos = useSelector((state) => state.lancamento.lanc);
  let sumReceber = 0;
  let sumPagar = 0;
  const today = new Date();
  let dateLanc = new Date();
  /* lancamentos.map((lan) =>
    lan.tipo === 'Receber' ? (sumReceber += lan.valueFormat) : 0,
  ); */

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
    'Novambro',
    'Dezembro',
  ];

  // Pegando apenas lançamentos do mês
  lancamentos.map((lan) => {
    if (lan.tipo === 'Receber') {
      dateLanc = new Date(lan.dateNew);
      if (
        getMonth(dateLanc) === getMonth(today) &&
        getYear(dateLanc) === getYear(today)
      ) {
        sumReceber += lan.valueFormat;
      }
    }
    return sumReceber;
  });

  // Pegando apenas lançamentos do mês
  lancamentos.map((lan) => {
    if (lan.tipo === 'Pagar') {
      dateLanc = new Date(lan.dateNew);
      if (
        getMonth(dateLanc) === getMonth(today) &&
        getYear(dateLanc) === getYear(today)
      ) {
        sumPagar += lan.valueFormat;
      }
    }
    return sumPagar;
  });

  const totalFormatado = formatPrice(sumReceber - sumPagar, 0);
  const total = sumReceber + sumPagar;
  // Usado no pequeno grafico
  const percentualPag = (sumPagar * 100) / total / 100;
  const percentualRec = (sumReceber * 100) / total / 100;

  return (
    <Background>
      <Container>
        <TitleResumo>{`Resumo - Mês ${
          monthNames[getMonth(today)]
        }`}</TitleResumo>
        <SubTitle valor={sumReceber - sumPagar}>{totalFormatado}</SubTitle>
        <DashList>
          <PanelChart>
            <Charts pagar={sumPagar} receber={sumReceber} />
          </PanelChart>
          <PanelResumo
            name="Contas a Receber"
            value={formatPrice(sumReceber, 0)}
            color="rgb(0, 204, 3)"
            colorHex={1}
            percentual={percentualRec}
          />
          <PanelResumo
            name="Contas a Pagar"
            value={formatPrice(sumPagar, 0)}
            color="rgb(204, 0, 3)"
            colorHex={2}
            percentual={percentualPag}
          />
        </DashList>
      </Container>
    </Background>
  );
}

/**
 * 
 * <ButtonTop
          onPress={() => {
            navigation.navigate('Adc Lanc');
            // console.tron.log(percentualRec);
          }}>
          <Icon name="add" size={35} color="#000" />
        </ButtonTop>
 */
