import React, { Component } from 'react';
import * as routes from './constants/routes';
import { Switch, Router } from 'react-router-dom';
import styled from 'styled-components';
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