import React, { Component } from 'react';
import * as routes from 'constan/routes';
import { Switch, Router } from 'react-router-dom';

export default class App extends Component {
render(){


  return (
    <AppContainer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </AppContainer>
  );
}
}

const AppContainer = styled.div`
  width: 100vw;
`;

