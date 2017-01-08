export function addNote(note) {
  return {
    type: 'ADD_NOTE',
    payload: note
  };
}