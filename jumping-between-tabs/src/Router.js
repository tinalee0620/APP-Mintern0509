import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './compoment/login';
import Home from './compoment/home';
import Hambergur from './compoment/hambergur'
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






