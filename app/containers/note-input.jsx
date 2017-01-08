import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNote } from '../actions/index';

class NoteInput extends Component {
  render() {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <input type="text" ref="noteText" />
        <button>add note</button>
      </form>
    )
  }
  onFormSubmit(e) {
    e.preventDefault();
    const noteText = this.refs.noteText.value;
    this.refs.noteText.value = '';
    this.props.addNote(noteText);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNote: addNote }, dispatch);
}

export default connect(null, mapDispatchToProps)(NoteInput);