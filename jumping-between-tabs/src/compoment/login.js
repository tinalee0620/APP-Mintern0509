import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TextInput, Image } from 'react-native';
import { Constants, Facebook } from 'expo';
import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

// You can import from local files
// import Navigator from './components/Navgator';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class App extends Component {
  state = {
    inputValue: 'User name',
  };
  state2 = {
    inputValue2: 'Password',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _handleTextChange2 = inputValue2 => {
    this.setState({ inputValue2 });
  };

  _loginButtonPress = () => {
    Alert.alert('登入成功');
    this.props.navigation.navigate('Home');
  };
  _forgetpasswordButtonPress = () => {
    Alert.alert('輸入gmail');
  };
  _signUpButtonPress = () => {
    Alert.alert('到註冊畫面');
  };

  _handleFacebookLogin = async () => {
    try {
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`
          );
          const profile = await response.json();
          Alert.alert('Logged in!', `Hi ${profile.name}!`);
          break;
        }
        case 'cancel': {
          Alert.alert('Cancelled!', 'Login was cancelled!');
          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      Alert.alert('Oops!', 'Login failed!');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./PAL.png")}
          style={styles.logo}
        />
        <Text style={styles.paragraph}>
        
        </Text>

        <TextInput
          style={styles.textInput}
          value={this.state.inputValue}
          onChangeText={this._handleTextChange}
          clearTextOnFocus="true"
        />
        <TextInput
          style={styles.textInput}
          value={this.state2.inputValue2}
          onChangeText={this._handleTextChange2}
          clearTextOnFocus="true"
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
    marginTop:-50,
    flex:1,
    alignItems: 'center',
    // justifyContent: 'center',
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