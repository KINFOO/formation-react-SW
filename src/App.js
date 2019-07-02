import React from 'react';
import './App.css';

import List from './List.js';

const tasks = [
  { name: 'Learn React', done: false },
  { name: 'Learn CSS', done: true },
  { name: 'Web development', done: true }
];

function App() {
  return (
    <div className="App">
      <h1>TODO</h1>
      <List tasks={tasks} />
    </div>
  );
}

export default App;
