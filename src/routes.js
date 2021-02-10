import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '~/pages/Dashboard';
import ListContas from '~/pages/ListContas';
import Lancamento from '~/pages/Lancamento';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function PageAddLanc() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}>
      <Stack.Screen
        options={{
          title: 'Lançamento',
        }}
        name="LancarConta"
        component={Lancamento}
      />
    </Stack.Navigator>
  );
}

export function PageDashBoard({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'dashboard' : 'dashboard';
          } else if (route.name === 'Lançamento') {
            iconName = focused ? 'add' : 'add';
          } else if (route.name === 'Histórico') {
            iconName = focused ? 'list' : 'list';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#111',
        inactiveTintColor: 'rgba(1,1,1,0.6)',
        style: {
          backgroundColor: '#1affd1',
        },
      }}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="Lançamento"
        options={{tabBarVisible: false}}
        component={PageAddLanc}
      />
      <Tab.Screen name="Histórico" component={ListContas} />
    </Tab.Navigator>
  );
}
// #1affd1
