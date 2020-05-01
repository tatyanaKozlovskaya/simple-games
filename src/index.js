import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import spiderCatReducer from './containers/spiderCat/spiderCatReducer';

import Main from './containers/main';
import SpiderCat from './containers/spiderCat';

const store = createStore(spiderCatReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/spider-cat">
          <SpiderCat />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
