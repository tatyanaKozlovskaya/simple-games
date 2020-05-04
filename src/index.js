import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { routerReducer } from 'react-router-redux';

import { createBrowserHistory } from 'history';

import spiderCatReducer from './containers/spiderCat/spiderCatReducer';

import Main from './containers/main';
import SpiderCat from './containers/spiderCat';

const store = createStore(
  combineReducers({
    spiderCatReducer,
    routing: routerReducer,
  }),
);

const history = createBrowserHistory({
  basename: '/',
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/spider-cat">
        <SpiderCat />
      </Route>

      <Route path="/">
        <Main />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
