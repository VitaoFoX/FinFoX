import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'controlefin',
      storage: AsyncStorage,
      whitelist: ['lancamento'],
    },
    reducers,
  );

  return persistedReducer;
};
