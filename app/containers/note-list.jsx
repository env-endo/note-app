import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteList extends Component {

  renderNoteList() {
    return this.props.notes.map((note) => {
      return (
        <p>{note}</p>
      )
    })
  }
  render() {
    return (
      <div>
        {this.renderNoteList()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(NoteList);
