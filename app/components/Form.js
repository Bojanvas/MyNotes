import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput,Dimensions, Picker , CheckBox, DatePickerAndroid} from "react-native";
import DismissKeyboard from 'dismissKeyboard';
import realm from '../config/realm.js';
import  Notes  from '../config/notesModel'

console.log('here it is '+Object.getOwnPropertyNames(Notes));

export default class Form extends Component<{}> {
    constructor(){
        super();
        this.state={
            title:"",
            text:"",
            category:"note",
            priority:2,
            notification:false,
            date: 'Choose date',
            edited:false,
        }
    }

    addNote(){
        var new_date= new Date();
        var note ={
            title:this.state.title,
            description:this.state.text,
            category:this.state.category,
            priority:parseInt(this.state.priority),
            notification:this.state.notification,
            notification_date:new_date,
            edited:this.state.edited,
        }
        if(Notes.newTask(note)){
            console.log('succsesfull');
        } else {
            console.log('unsuccsesfull')
        }

    }
    async OpenDate(){
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                var date_string =day+' '+month+' '+year; 
                this.setState({
                    date:date_string
                });
              }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }
    render(){
        return(
            <View style = {{flex:1}}>
                <View style ={styles.title}>
                    <Text style={{color:'white',fontFamily: 'spectral',fontSize:18}}>Title:</Text>
                    <TextInput
                        // placeholder="Enter Title"
                        placeholderTextColor="white"
                        underlineColorAndroid='transparent'
                        style={{height: 40, borderColor: 'white', borderWidth: 1, borderRadius:14, color:'white',padding:5}}
                        onChangeText={(title) => this.setState({title})}
                        value={this.state.title}
                    />
                </View>
                <View style ={styles.description}>
                    <Text style={{color:'white',fontFamily: 'spectral',fontSize:18}}>Description:</Text>
                    <TextInput
                        // placeholder="Enter Description"
                        multiline={true}
                        placeholderTextColor="white"
                        underlineColorAndroid='transparent'
                        style={{height: 150, borderColor: 'white', borderWidth: 1, borderRadius:14, color:'white',padding:5}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                </View>
                <View style ={styles.pickers}>
                    <View style ={styles.category}>
                        <Text style={{color:'white',fontFamily: 'spectral',fontSize:18}}>Category:</Text>
                        <Picker
                            style={{color:'white'}}
                            selectedValue={this.state.category}
                            onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}>
                            <Picker.Item label="Note" value="note" />
                            <Picker.Item label="ToDo" value="todo" />
                            <Picker.Item label="Alarm" value="alarm" />
                        </Picker>
                    </View>
                    <View style ={styles.category}>
                        <Text style={{color:'white',fontFamily: 'spectral',fontSize:18}}>Priority:</Text>
                        <Picker
                            style={{color:'white'}}
                            selectedValue={this.state.priority}
                            onValueChange={(itemValue, itemIndex) => this.setState({priority: itemValue})}>
                            <Picker.Item label="Low" value= '1' />
                            <Picker.Item label="Normal" value= '2' />
                            <Picker.Item label="High" value= '3'/>
                        </Picker>
                    </View>       
                </View>
                <View style ={styles.checkbox}>
                    <Text style={{color:'white',fontFamily: 'spectral',fontSize:18,marginRight:140}}>Notification:</Text>
                    <CheckBox
                        onValueChange={() => { this.setState({notification: !this.state.notification}) }}
                        value={ this.state.notification } />                      
                </View>
                <View style ={styles.pickers}>
                    <View style ={styles.timePicker}>
                        <Text style={{color:'white',fontFamily: 'spectral',fontSize:18}}>Time for Notification:</Text> 
                        <TextInput 
                            style={{height: 40, width:100,borderColor: 'white', borderWidth: 1, borderRadius:14, color:'white',paddingLeft:10, marginTop:10}}
                            value={this.state.date}
                            onFocus = {this.OpenDate.bind(this, 'simple', { date: this.state.date })}
                            // onFocus={ ()=> DismissKeyboard()} 
                            />
                    </View>
                    <TouchableOpacity style ={styles.button} onPress={()=>{ this.addNote()}}>
                        <Text style={{color:'white',textAlign:'center'}}>ADD</Text>
                    </TouchableOpacity>
                </View>                 
            </View>    
        )
    }
}

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
   title:{
    marginTop:10,
   },
   description:{
    marginTop:10,
   },
   category:{
    width:width/2.5,
    marginTop:10,
   },
   checkbox:{
    width:width/1.5,
    marginTop:10,
    flexDirection:'row',
   },     
   pickers:{
    width:width/1.5,
    marginTop:10,
    flexDirection:'row',
   },
   button:{
    borderColor:'white',
    backgroundColor:'rgba(231,76,60,1)',
    borderWidth:1,
    borderRadius:14,
    width:50,
    padding:10,
    width:70,
    marginTop:30,
   }
});