import React from 'react';
import {  Text, View, Image, StyleSheet,Button,Icon } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import Header from './header.js';
class HomeScreen extends React.Component {
  
  render() {
    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <Text>Home!</Text>
        <Button
          title="Go to Edit"
          onPress={() => this.props.navigation.navigate('Edit')}
        />
      </View>
    );
  }
}

class EditScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.ed1}>
          <Image style={styles.ed1} source={require('./editpage1.png')}>
          </Image>
        </View>
        <View style={[styles.ed]}>
          <Image style={styles.ed} source={require('./editpage.png')}>
          </Image>
        </View>
            </View>
    );
  }
}
class NoticeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>通知</Text>
        <Button
          title="Go to Stamp"
          onPress={() => this.props.navigation.navigate('Stamp')}
        />
      </View>
    );
  }
}
class StampScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>stamp</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}
export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Edit: { screen: EditScreen },
    Notice:{ screen:NoticeScreen},
    Stamp:{screen:StampScreen},
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Edit') {
          iconName = `ios-create${focused ? '' : '-outline'}`;
        }
        else if (routeName === 'Notice') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
        } 
        else if (routeName === 'Stamp') {
          iconName = `ios-image${focused ? '' : '-outline'}`;
        } 
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
       return <Ionicons name={iconName} size={25} color={tintColor='#1D5B7A'} />;
       
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#1D5B7A',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);
const styles = StyleSheet.create({
  ed: {
    flex: 2.9,
    height: 300, width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ed1:{
    flex:1.1,
    height: 100, width: 380,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
