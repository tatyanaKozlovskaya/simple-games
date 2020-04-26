import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from "./containers/main"
import HappyCat from './containers/happyCat';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/happy-cat">
        <HappyCat />
      </Route>
      
      <Route path="/">
        <Main />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);
