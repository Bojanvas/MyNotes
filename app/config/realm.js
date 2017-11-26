import  Notes  from './notesModel'
import Realm from 'realm';

const realm = new Realm({
  schema: [
    Notes
  ],
})

export default realm