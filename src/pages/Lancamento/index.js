import React, {useLayoutEffect, useState, useRef} from 'react';
import {TouchableOpacity, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import * as LanActions from '~/store/modules/lancamento/actions';

import {
  Container,
  Form,
  FormInput,
  FormCurrencyInput,
  TextStyled,
  FormButton,
  SubmitButton,
} from './styles';

export default function Lancamento({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}>
          <Icon name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const [value, setValue] = React.useState(0); // can also be null
  const [date, setDate] = useState(new Date());
  const [desc, setDesc] = useState('');
  const [parcelas, setParcelas] = useState('');
  const descRef = useRef();
  const dateRef = useRef();
  const parcelasRef = useRef();
  const [tipo, setTipo] = useState('Receber');
  // const profile = useSelector((state) => state.lancamento);

  const dispatch = useDispatch();
  function handleSubmit() {
    if (value <= 0) {
      Alert.alert('Falha no lançamento', 'O valor deve ser maior que 0.');
      return;
    }
    if (desc === '') {
      Alert.alert('Falha no lançamento', 'Escreva uma descrição');
      return;
    }
    if (parcelas === '') {
      setParcelas(1);
    }
    if (parcelas === 0) {
      setParcelas(1);
    }

    Alert.alert(
      'Confirmação',
      'Confirma o lançamento?',
      [
        {
          text: 'Não',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            dispatch(
              LanActions.createLancRequest({
                date,
                desc,
                parcelas,
                tipo,
                value,
              }),
            );

            setParcelas('');
            setDesc('');
            setValue(0);
          },
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormCurrencyInput
            value={value}
            onChangeValue={setValue}
            unit="R$"
            delimiter="."
            separator=","
            precision={2}
            returnKeyType="next"
            tipo={tipo}
            onPressFunc={() => {
              if (tipo === 'Receber') {
                setTipo('Pagar');
              } else {
                setTipo('Receber');
              }
            }}
            onSubmitEditing={() => descRef.current.focus()}
            onChangeText={(formattedValue) => {
              console.log(formattedValue); // $2,310.46
            }}
          />
          <TextStyled>Descrição</TextStyled>
          <FormInput
            value={desc}
            onChangeText={setDesc}
            icon="create"
            ref={descRef}
            // autoCorrect={false}
            autoCapitalize="none"
            placeholder="Descrição do lançamento"
          />
          <TextStyled>Data de Lançamento</TextStyled>
          <DateInput ref={dateRef} date={date} onChange={setDate} />

          <TextStyled>Parcelas</TextStyled>
          <FormInput
            value={parcelas}
            onChangeText={setParcelas}
            name="parcelas"
            icon="label"
            ref={parcelasRef}
            // secureTextEntry
            placeholder="Número de parcelas"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <FormButton />
          <SubmitButton loading={false} onPress={handleSubmit}>
            Lançar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
