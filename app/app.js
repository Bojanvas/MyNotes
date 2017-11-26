/**
 * MyNotes App
 * https://github.com/Bojanvas/MyNotes
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import Button from './components/Button';
import GetScreen from './components/getScreen';


export default class App extends Component<{}> {

  static navigationOptions = {
    // mavigation header
    title: 'MyNotes',
    headerTintColor: 'white',
    headerStyle: {
    backgroundColor: '#33afd4', 
    elevation: null
    },
    headerTitleStyle: {
      fontWeight:'200',
      fontFamily: 'spectral'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Your Notes
        </Text>
        <GetScreen />
        <Button navigation={this.props.navigation}/>
      </View>
    );
  }
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height:height,
    width:width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'spectral'
  },
});