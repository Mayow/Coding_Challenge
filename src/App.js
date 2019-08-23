import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

import Search from '../src/components/Search'
import Main from '../src/components/Main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Main />              
      </header>
    </div>
  );
}

export default App;
