import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter, Route, useParams, Switch } from 'react-router-dom';

import { routerReducer } from 'react-router-redux';

import spiderCatReducer from './containers/spiderCat/spiderCatReducer';

import Main from './containers/main';
import SpiderCat from './containers/spiderCat';

const store = createStore(
  combineReducers({
    spiderCatReducer,
    routing: routerReducer,
  }),
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter basename="simple-games/">
      <Switch>
        <Route path="/spider-cat">
          <SpiderCat />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
