import React, { Component } from 'react';
import NoteInput from '../containers/note-input';
import NoteList from '../containers/note-list';

class NoteApp extends Component {
  render() {
    return (
      <div>
        <NoteInput />
        <NoteList />
      </div>
    )
  }
}

export default NoteApp;