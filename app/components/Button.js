import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//External Sources
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';

export default class Button extends Component {
  render() {
    return (
    <View style={{flex:1,width:100,alignSelf: 'flex-end'}}>
        <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.navigate('Create')}>
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
});
