/**
 * MyNotes CreateNotes
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
}from 'react-native';
import Form from '../components/Form.js';

export default class CreateNote extends Component<{}> {

    static navigationOptions = {
        // mavigation header
        title: 'Create Note',
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

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.form}>
                    <Form />
                </View>    
            </View>    
        )
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
    form: {
        borderRadius:14,
        margin:30,
        height:height,
        width:width/1.1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33afd4',
    },
});
