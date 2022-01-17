import React from 'react';
import logo from './logo.svg';
import './App.css';

console.log("process is ", process);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tried to read process.env.REACT_APP_FOO and it's {process.env.REACT_APP_FOO}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
