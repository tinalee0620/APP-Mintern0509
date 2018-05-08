import React,{ Component }from 'react';
import {  Text, View, Image, StyleSheet,Button,Icon } from 'react-native';
export default class Header extends Component{
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      tabBarLabel: 'Albums',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      headerLeft: (
        <Icon
          name='menu'
          iconStyle={{ marginLeft: 9 }}
          onPress={() => this.props.navigation.navigate('Hambergur')}
        />
      ),
      headerRight: (
        <Icon
          name='more-vert'
          iconStyle={{ marginLeft: 0 }}
          onPress={() => this.props.navigation.navigate('login')}
        />
      ),
    }
  };}