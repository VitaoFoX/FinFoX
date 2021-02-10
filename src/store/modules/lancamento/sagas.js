import {Alert} from 'react-native';
import {takeLatest, put, all} from 'redux-saga/effects';
// import AsyncStorage from '@react-native-community/async-storage';
// import api from '~/services/api';
import {addMonths} from 'date-fns';

import {createLancSuccess, createLancFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {date, desc, parcelas, tipo, value} = payload.data;

    const valueFormat = value / parcelas;

    for (let i = 0; i < parcelas; i += 1) {
      let dateNew = date;
      let descNew = desc;

      if (i > 0) {
        dateNew = addMonths(date, i);
        descNew = `${desc}(${i + 1}/${parcelas})`;
      }

      const lanc = {
        id: Math.random(),
        descNew,
        dateNew,
        parcelas,
        tipo,
        valueFormat,
      };

      // Alert.alert('Sucesso', valueFormat.toFixed(2));

      // AsyncStorage.setItem('lanc', JSON.stringify(lanc));
      // const response = yield call(api.put, 'users', profile);
      yield put(createLancSuccess(lanc));
    }
    Alert.alert('Sucesso', 'Lançamento realizado com sucesso');
  } catch (err) {
    Alert.alert('Falha no lançamento', `${err}`);
    yield put(createLancFailure());
  }
}

export default all([
  takeLatest('@lancamento/CREATE_LANC_REQUEST', updateProfile),
]);
