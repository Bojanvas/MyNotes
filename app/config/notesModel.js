import Realm from 'realm';
import realm from './realm.js';

export default class NoteRealm {
    static schema = {
        //schema for Notes
        name: 'Notes',
        primaryKey:"id",
        properties: 
        {
            id: 'string',
            priority:'int',
            title: 'string', 
            category: 'string', 
            description: 'string', 
            created: 'date', 
            updated: 'date',
            edited:'bool',
            notification: 'bool',
            notification_date:'date', 
        }
    }
    //method to remove notes
    static removerNotes(realmObj){
        return realm.delete(realmObj);
    }

    //method to return all notes
    static getAllNotes(){
        return realm.objects('Notes');
    }

    //method to return l notes
    static getNote(note){
        return realm.objects('Notes','id' == note.id);
    }

    //method to write note
    static newTask (note) {
        var today = new Date(); // current date

        realm.write(() =>
          realm.create('Notes', {
            id: Math.random().toString(),
            priority: note.priority,
            title: note.title,
            category: note.category,
            description: note.description,
            notification:note.notification,
            notification_date:note.notification_date,
            created: today, 
            updated: today, 
            edited:note.edited,
             })
        )
    }
    
    //method to update note
    // static updateTask (note) {
    //     let result = Realm.objects('Notes').filtered('id' = note.id);
    //     if (result){
    //         var today = new Date(); // current date
            
    //         realm.write(() =>
    //             result.priority= note.priority,
    //             result.title = note.title,
    //             result.category = note.category,
    //             resultdescription = note.description,
    //             result.updated = today.toDateString(), // format date, 
    //             result.edited =note.edited,
    //         )
    //     } else {
    //         msg = "Somthing wrong with Db try again";
    //         return msg;
    //     }
    // }    
}

