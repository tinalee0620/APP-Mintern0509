import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './components/login';
import Home from './components/home';
import Hambergur from './components/hambergur'
export const LoginStack = StackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
    },
  Hambergur:{
    screen: Hambergur,
    },
    // Edit:{
    //   screen: Edit,
    // },
    // Notice:{
    //   screen: Notice,
    // },
    // Setting:{
    //   screen: Setting,
    // },
  },
);






