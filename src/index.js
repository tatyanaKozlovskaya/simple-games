import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import happyCatReducer from './containers/happyCat/happyCatReducer';

import Main from './containers/main';
import HappyCat from './containers/happyCat';

const store = createStore(happyCatReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/happy-cat">
          <HappyCat />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
