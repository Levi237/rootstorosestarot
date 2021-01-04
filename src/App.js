import React, { Component } from 'react';
import styled               from 'styled-components';
import { Switch, Route }    from 'react-router-dom';
import * as routes          from './constants/routes';
export default class App extends Component {
  render(){
    return (
      <AppContainer>
        Hello World
      </AppContainer>
    );
  };
};

const AppContainer = styled.div`
  width: 100vw;
`;