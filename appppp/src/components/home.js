import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import { Button, Icon,ButtonGroup } from 'react-native-elements';

export default class Home extends Component{
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      tabBarLabel: 'Albums',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      headerLeft: (
        <Icon
          name='menu'
          iconStyle={{ marginLeft: 10 }}
          onPress={() => this.props.navigation.navigate('Hambergur')}
        />
      ),
      headerRight: (
        <Icon
          name='back'
          iconStyle={{ marginLeft: 0 }}
          onPress={() => this.props.navigation.navigate('login')}
        />
      ),
    }
  };
  constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}
  
  render() {
    const buttons = ['Send', 'Received', 'Collection']
  const { selectedIndex } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.a}>
        <Image
          source={require("./tina.png")}
          style={styles.head}
        />
        <Text style={styles.paragraph}>
        send:20          receive:25
        </Text>
        </View>
        <View style={styles.b}>
        <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 50,width:400}}
    />
        <Text style={styles.paragraph}>
        receive
      
        </Text>
        </View>
        <View style={styles.c}>
        <Image
          source={require("./home.png")}
          style={styles.home}
        />
        <Text style={styles.paragraph}>
        receive
        </Text>
        </View>
        </View>
        )
  }
}
const styles = StyleSheet.create({
  head:{
    marginTop:2,
    marginBottom:10,
    height: 100, width: 100,
  },
  home:{
    height: 320, width: 370,
    alignItems:'center',
  },
  container: {
    flex: 4,
    alignItems: 'stretch',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
  a: {
    flex: 1.1,
    alignItems:'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'#EDE3D3',
  },
  b: {
    flex: 0.3,
     alignItems:'center',
    //alignItems:'stretch',
    // justifyContent: 'center',
   // paddingTop: Constants.statusBarHeight,
   
    backgroundColor: '#000',
  },
  c: {
    flex: 2.6,
    alignItems:'stretch',
    // justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  }
}
);