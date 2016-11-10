import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';
reducers.routing = routerReducer;
// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { red500 } from 'material-ui/styles/colors';
// Styles
import styles from './styleJS';
// Components
import Application from './components/Application';
import DataFormContent from './components/DataFormContent';
import UpdateItemModal from './components/UpdateItemModal';
import DeleteItemModal from './components/DeleteItemModal';
import Content from './components/Content';
import Preview from './components/Preview';
// Local store
import * as localStore from './localStore';
// Simulate Tapping
injectTapEventPlugin();

const store = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(hashHistory, store);
const routes = (
  <Route path='/' component={Application}>
    <Route path='/content' component={Content}>
      <Route path='/content/item/:itemId' component={DataFormContent}>
        <Route path='/content/item/:itemId/update' component={UpdateItemModal} />
        <Route path='/content/item/:itemId/delete' component={DeleteItemModal} />
      </Route>
    </Route>
    <Route path='/preview' component={Preview} />
  </Route>
);

// MUI Theme Controller
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red500
  }
});

// Main Application
function run() {
  let state = store.getState();
  localStore.set(state, ['drawer', 'item', 'resource', 'navigation']);
  //localStore.clear(state);
  console.log(state);
  ReactDOM.render((<Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        {routes}
      </Router>
    </MuiThemeProvider>
  </Provider>), document.getElementById('root'))
}

run();
store.subscribe(run);
/*
store.dispatch({
  type: 'ADD_ITEM',
  data: {
    name: 'give feed',
    description: 'hurry fruit claws center please ',
    image: 'https://4.bp.blogspot.com/-tilGNle9Pj4/V6F4u_o3b6I/AAAAAAAAGiM/7wjrJ2ucN8gzTloL-ik8GYrmpy7GNjQUwCLcB/s1600/010816%2Bawayfromtheblue%2Brebecca%2Bminkoff%2Bred%2Bsaddle%2Bbag%2Bprinted%2Bskinny%2Bjeans%2Bcooper.jpg'
  }
});*/
