import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';

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
    <BrowserRouter basename="/simple-games/">
      <Switch>
        <Route path="/spider-cat">
          <SpiderCat />
        </Route>

        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
