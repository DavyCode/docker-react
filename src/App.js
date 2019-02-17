import React, { Component } from 'react';
import Flex from './Flex'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Flex />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docker - React Application v33
          </a>
        </header>
      </div>
    );
  }
}

export default App;
