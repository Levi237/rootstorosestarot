import React, { Component } from 'react';
import styled               from 'styled-components';
import { Switch, Route }    from 'react-router-dom';
import * as routes          from './constants/routes';
export default class App extends Component {
  render(){
    return (
      <AppContainer> 
        <Switch>
          <Route path={routes.ROOT} render={() => <h1>Hello Angie</h1>}/>
        </Switch>
      </AppContainer>
    );
  };
};

const AppContainer = styled.div`
  width: 100vw;
  h1 {
    text-align: center;
  }
`;