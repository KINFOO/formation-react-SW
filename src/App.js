import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import List from './List.js';

const store = createStore(
  reducer, //
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <h1>TODO</h1>
      <Provider store={store}>
        <List />
      </Provider>
    </div>
  );
}

export default App;
