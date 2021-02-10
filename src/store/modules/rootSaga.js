import {all} from 'redux-saga/effects';

import lancamento from './lancamento/sagas';

export default function* rootSaga() {
  return yield all([lancamento]);
}
