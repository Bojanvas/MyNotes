import Realm from 'realm'

export class NoteRealm {
    static schema = {
        //schema for Notes
        name: 'Notes',
        primaryKey:"id",
        properties: 
        {
            id: 'int',
            priority:'int',
            title: 'string', 
            category: 'string', 
            description: 'string', 
            created: 'string', 
            updated: 'string',
            edited:'boolean', 
        }
    }
    //method to remove notes
    static removerNotes(realmObj){
        return Realm.delete(realmObj);
    }

    //method to return all notes
    static getAllNotes(){
        return Realm.objects('Notes');
    }

    //method to return l notes
    static getNote(note){
        return Realm.objects('Notes','id' == note.id);
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
            created: today.toDateString(), // format date,
            updated: today.toDateString(), // format date, 
            edited:note.edited,
             })
        )
    }
    
    //method to update note
    static updateTask (note) {
        let result = Realm.objects('Notes').filtered('id' = note.id);
        if (result){
            var today = new Date(); // current date
            
            realm.write(() =>
                result.priority= note.priority,
                result.title = note.title,
                result.category = note.category,
                resultdescription = note.description,
                result.updated = today.toDateString(), // format date, 
                result.edited =note.edited,
            )
        } else {
            msg = "Somthing wrong with Db try again";
            return msg;
        }
    }    
}

