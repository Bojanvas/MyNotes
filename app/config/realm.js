import { Notes } from './notesModel'
const realm = new Realm({
  schema: [
    Notes
  ],
})

export default realm