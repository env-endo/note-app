import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import NoteApp from './components/note-app';

ReactDom.render(
  <Provider store={createStore(reducers)}>
    <NoteApp />
  </Provider>,
  document.getElementById('app')
)