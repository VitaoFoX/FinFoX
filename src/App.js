import React from 'react';

// import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';

import {PageDashBoard} from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <PageDashBoard />
    </NavigationContainer>
  );
}
