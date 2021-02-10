import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
import {getMonth, getYear, format} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import Background from '~/components/Background';
import {formatPrice} from '~/util/format';
import * as LancAction from '~/store/modules/lancamento/actions';

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
  ViewModal,
  SubTituloValueModal,
  ButtonModal,
  TituloModal,
  TextModal,
  SubTitle2,
  ContentTop,
  SubTitle3,
  SubTitle4,
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
  const [month, setMonth] = useState(getMonth(new Date()));
  const [year, setYear] = useState(getYear(new Date()));
  const [lancMes, setLancMes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalItem, setModalItem] = useState(null);
  const today = new Date();
  const lancDatas = [];
  const lancamentos = useSelector((state) => state.lancamento.lanc);
  const dispatch = useDispatch();
  const [sumReceber, setSumReceber] = useState(0);
  const [sumPagar, setSumPagar] = useState(0);
  let sumReceberLet = 0;
  let sumPagarLet = 0;

  function lancamentosData(somar) {
    // console.tron.log(year);
    // console.tron.log(year);
    const novaConsulta = lancamentos.map((lan) => {
      let dateLanc = new Date();
      dateLanc = new Date(lan.dateNew);

      if (getMonth(dateLanc) === month + somar && getYear(dateLanc) === year) {
        lancDatas.push(lan);
      }

      if (
        getMonth(dateLanc) === month + somar &&
        getYear(dateLanc) === year &&
        lan.tipo === 'Receber'
      ) {
        sumReceberLet += lan.valueFormat;
      }
      if (
        getMonth(dateLanc) === month + somar &&
        getYear(dateLanc) === year &&
        lan.tipo === 'Pagar'
      ) {
        sumPagarLet += lan.valueFormat;
      }

      // console.tron.log(month + 1);
      return lancDatas;
    });

    setSumReceber(sumReceberLet);
    setSumPagar(sumPagarLet);

    setLancMes(lancDatas);
  }

  function handleNextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
      // lancamentosData(1);
    } else {
      setMonth(month + 1);
      // console.tron.log(month);
      lancamentosData(1);
    }
  }
  function handlePrevMonth() {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
      // lancamentosData(-1);
    } else {
      setMonth(month - 1);
      lancamentosData(-1);
    }
  }

  function handleCancel() {
    Alert.alert(
      'Confirmação',
      'Confirma a exclusão do lançamento?',
      [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            dispatch(LancAction.removeLancFailure(modalItem));
            setModalVisible(!modalVisible);
          },
        },
      ],
      {cancelable: false},
    );
  }

  useEffect(() => {
    // console.tron.log(month);
    lancamentosData(0);
  }, [year, month, lancamentos]);

  /* useFocusEffect(
    useCallback(() => {
      lancamentosData(0);
    }, [year, month]),
  ); */

  return (
    <Background>
      <Container>
        <CenterPage>
          <ButtonTop
            onPress={() => {
              handlePrevMonth();
            }}>
            <Icon name="chevron-left" size={35} color="#000" />
          </ButtonTop>
          <TitleResumo>{`${monthNames[month]} (${year})`}</TitleResumo>
          <ButtonTop
            onPress={() => {
              handleNextMonth();
            }}>
            <Icon name="chevron-right" size={35} color="#000" />
          </ButtonTop>
        </CenterPage>
        <ContentTop>
          <SubTitle2 tipo="Total">Total Receber: </SubTitle2>
          <SubTitle3>{formatPrice(sumReceber, 0)}</SubTitle3>
        </ContentTop>
        <ContentTop>
          <SubTitle2 tipo="Total">Total Pagar: </SubTitle2>
          <SubTitle3 tipo="Pagar">{formatPrice(sumPagar, 0)}</SubTitle3>
        </ContentTop>
        <ContentTop>
          <SubTitle2 tipo="Total">Total:</SubTitle2>
          <SubTitle4 total={sumReceber - sumPagar}>
            {formatPrice(sumReceber - sumPagar, 0)}
          </SubTitle4>
        </ContentTop>
        <ListLancamento
          data={lancMes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => (
            <Item
              onPress={() => {
                setModalItem(item);
                setModalVisible(!modalVisible);
              }}>
              <Concat>
                <Titulo>{format(new Date(item.dateNew), 'dd/MM')}</Titulo>
                <SubTitulo>{`${item.descNew}`.substring(40, 0)}</SubTitulo>
                <SubTituloValue tipo={item.tipo}>
                  {formatPrice(item.valueFormat.toFixed(2))}
                </SubTituloValue>
              </Concat>
            </Item>
          )}
        />
      </Container>
      <Modal isVisible={modalVisible}>
        {modalItem && (
          <ViewModal>
            <TituloModal>Detalhes do Lançamento</TituloModal>
            <Concat>
              <Titulo>Descrição:</Titulo>
              <SubTitulo>{modalItem.descNew}</SubTitulo>
            </Concat>
            <Concat>
              <Titulo>Valor:</Titulo>
              <SubTituloValueModal tipo={modalItem.tipo}>
                {formatPrice(modalItem.valueFormat.toFixed(2))}
              </SubTituloValueModal>
            </Concat>
            <Concat>
              <Titulo>Data:</Titulo>
              <SubTitulo>
                {format(new Date(modalItem.dateNew), 'dd/MM/yyyy')}
              </SubTitulo>
            </Concat>
            <Concat>
              <Titulo>Tipo:</Titulo>
              <SubTituloValueModal tipo={modalItem.tipo}>
                {modalItem.tipo}
              </SubTituloValueModal>
            </Concat>
            <ButtonModal
              tipo="Red"
              onPress={() => {
                handleCancel();
              }}>
              <TextModal>Excluir</TextModal>
            </ButtonModal>
            <ButtonModal
              tipo="Blue"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <TextModal>Fechar</TextModal>
            </ButtonModal>
          </ViewModal>
        )}
      </Modal>
    </Background>
  );
}
