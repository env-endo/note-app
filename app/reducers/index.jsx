import { combineReducers } from 'redux';
import NoteReducer from './reducer_note-list';

const rootReducer = combineReducers({
  notes: NoteReducer
});

export default rootReducer;