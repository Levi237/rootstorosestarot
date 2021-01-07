import React, { Component } from 'react';
import styled               from 'styled-components';
import { Switch, Route }    from 'react-router-dom';
import * as routes          from './constants/routes';

import Deck from './components/deck/Deck';
export default class App extends Component {
  render(){
    return (
      <AppContainer> 
        <Switch>
          <Route exact path={routes.ROOT} render={() => 
            <>
              <h1>Hello Angie :)</h1>
              <Deck/>
            </>
            }/>
          <Route path={routes.ROOT} render={() => <h1>Uh Oh</h1>}/>
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