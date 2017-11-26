import React , { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
} from 'react-native';
import realm from '../config/realm.js';
import  Notes  from '../config/notesModel'

export default class GetScreen extends Component {
    constructor(){
        super();
    }
    // componentWillMount(){
    //     var notes = Notes.getAllNotes();
    //     console.log(notes);
    // }
    renderItem({ item, index }) {
        if(item.created){
            var month = item.created.getUTCMonth() + 1; //months from 1-12
            var day = item.created.getUTCDate();
            var year = item.created.getUTCFullYear();   
            created = year + "/" + month + "/" + day;
        }
        switch(item.priority){
            case 1:
                prio = 'Low';
                break;
            case 2:
                prio = "Normal";
                break;
            case 3:
                prio= "Hard";
                break;
        }
        return <View keys={index} style={styles.lines}><View style={styles.title}><Text style={{color:'white',fontFamily:'spectral',fontSize:18, textAlign:'center'}}> {item.title}</Text></View><View style={styles.content}><Text style={{fontSize:16,color:'white'}}>{item.description}</Text></View><View style={styles.info}><Text style={{color:'white',fontFamily:"spectral"}}>Category : {item.category}  ||  Priority : {prio}  ||  Date : {created.toString()}</Text></View></View>;
    }
    render(){
        var notes = Notes.getAllNotes();

        return(
            <View style={styles.main}>
                <FlatList
                    data={notes}
                    renderItem={this.renderItem}
                    />  
           </View>      
        )
    }
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    main:{
        height:height/1.7,
    },
    lines:{
        marginBottom:10,
        width:width/1.1,
        backgroundColor:'#33afd4',
        borderRadius:14,
        padding:10,
    },
    title:{

    },
    container:{
        padding:10,
    },
    info:{
        marginTop:10,
    }
})