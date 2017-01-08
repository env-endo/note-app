export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_NOTE':
      return [action.payload, ...state];
  }

  return state;
}