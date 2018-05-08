import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import { Button, Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

// You can import from local files
// import Navigator from './components/Navgator';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  
  static navigationOptions = ({ navigation }) => {
  return {
      title: 'Protfile',
      tabBarLabel: 'Albums',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      headerLeft: (
        <Icon
          name='back'
          iconStyle={{ marginLeft: 10 }}
          onPress={() => this.props.navigation.navigate('home')}
        />
      ),
     }
    };
  render() {
    
    return (
      <View style={styles.container}>
        <Image
          source={require("./PAL.png")}
          style={styles.logo}
        />

        <Button
          title="Log in"
          onPress={this._loginButtonPress}
          titleStyle={({ fontWeight: '700' }, { fontSize: 32 })}
          buttonStyle={{
            backgroundColor: '#17315F',
            width: 220,
            height: 40,
            borderColor: 'transparent',
            borderWidth: 0.5,
            borderRadius: 30,
            marginTop: 10,
            padding: 0,
          }}
        />

        <Button
          title="以 Facebook 登入"
          onPress={this._handleFacebookLogin}
          titleStyle={({ fontWeight: '700' }, { fontSize: 32 })}
          buttonStyle={{
            backgroundColor: '#3b5998',
            width: 220,
            height: 40,
            borderColor: 'transparent',
            borderWidth: 0.5,
            borderRadius: 30,
            margin: 16,
            padding: 0,
          }}
        />
        <Button
          title="忘記密碼"
          onPress={this._forgetpasswordButtonPress}
          color="#000"
          titleStyle={({ fontWeight: '700' }, { fontSize: 30, textDecorationline:'underline',})}
          buttonStyle={{
            backgroundColor: (0,0,0,0),
            width: 100,
            height: 20,
            borderColor: 'transparent',
            borderWidth: 0.5,
            borderRadius: 4,
            margin: 12,
            padding: 0,
          }}
        />
        <Button
          title="Sign up >"
          onPress={this._signUpButtonPress}
          color="#000"
          titleStyle={({ fontWeight: '700' }, { fontSize: 30 })}
          buttonStyle={{
            backgroundColor: (0,0,0,0),
            width: 100,
            height: 80,
            borderColor: 'transparent',
            borderWidth: 0.5,
            borderRadius: 4,
            margin: 12,
            padding: 0,
          }}
        />
      </View>
    );
    // <AssetExample />
  }
}

const styles = StyleSheet.create({
  logo:{
    marginTop:70,
    marginBottom:20,
    height: 155, width: 120,
  },
  container: {
    flex: 2,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EDE3D3',
  },
  textInput: {
    width: 220,
    height: 44,
    padding: 14,
    margin: 10,
    borderWidth: 0.5,
    borderRadius: 30,
    borderColor:(29,75,122),
    backgroundColor:(29,75,122,0.8),
    color:'#A8A8A8',
  },
  // paragraph: {
  //   // flex:2,
  //   marginTop: 90,
  //   marginBottom: 80,
  //   fontSize: 32,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   color: '#34495e',
  // },
});