import React from 'react';
import {AppRegistry, View, ScrollView} from 'react-native';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Imports all the components from Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {green500, deepOrangeA200} from 'material-ui/styles/colors';

import styles from './Styles';
import DataList from './components/DataList';
import DataForm from './components/DataForm';

// This is required to simulate tapping.
injectTapEventPlugin();


const TOGGLE_DRAWER   = 'TOGGLE_DRAWER';
const CLOSE_DRAWER    = 'CLOSE_DRAWER';

// Declaring initial state of the drawer
const initialState = {
  drawer: false
};

// To return the action call before sending it into the drawer reducer
function toggleDrawer(text) {
  return {
    type: TOGGLE_DRAWER,
    text
  }
}

// Drawer reducer to return the state or action
function drawer (state = initialState.drawer, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return true

    case CLOSE_DRAWER:
      return false

    default:
      return state
  }
}

// Combining all reducers before loading into store.
const reducers = combineReducers({
  drawer
})

// Declaring a redux store called store and registering the redux reducer to it. There should only be one store declared.
let store = createStore(reducers)

// ApplicationBar shown in the interface
const ApplicationBar = () => (
  <AppBar
    title="Content"
    onLeftIconButtonTouchTap={()=>{store.dispatch(toggleDrawer())}}
    iconElementRight={<FlatButton label="Preview" />}
  />
);

const mapStateToPropsApplicationContent = (state) => {
  return {
    listItemTemplate: '<div>Hello, World</div>'
  }
}

const mapDispatchToPropsApplicationContent = (dispatch) => {
  return {
    renderListItem: ()=>{ return('<div><i class="material-icons">more_vert</i></div>')}
  }
}

// ApplicationContent shown in the interface
let ApplicationContent = () => {
  return (
    <View style={styles.applicationContentBox}>
      <View style={styles.applicationContentWrapper}>
        <DataList/>
        <DataForm/>
      </View>
    </View>
  )
}

ApplicationContent = connect(
  mapStateToPropsApplicationContent,
  mapDispatchToPropsApplicationContent
)(ApplicationContent)

const mapStateToPropsAppDrawer = (state) => {
  return {
    drawerstate: state.drawer
  }
}

const mapDispatchToPropsAppDrawer = (dispatch) => {
  return {
    handleToggle: (index) => {
      dispatch({type: TOGGLE_DRAWER})
    },

    handleClose: (index) => {
      dispatch({type: CLOSE_DRAWER})
    }
  }
}

// ApplicationDrawer shown in the interface
let ApplicationDrawer = ({drawerstate, handleClose}) => {
  return (
    <Drawer
      docked={false}
      width={200}
      open={drawerstate}
      onRequestChange={() => {handleClose()}}
    >
      <AppBar title="Create" showMenuIconButton={false}/>
      <MenuItem>Home</MenuItem>
      <MenuItem>Content</MenuItem>
      <MenuItem>Navigation</MenuItem>
    </Drawer>
  )
}

// Links the the mapStateToPropsAppDrawer and mapDispatchToPropsAppDrawer to ApplicationDrawer
ApplicationDrawer  = connect(
  mapStateToPropsAppDrawer,
  mapDispatchToPropsAppDrawer
)(ApplicationDrawer)

// Use to control theme
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    accent1Color: deepOrangeA200
  }
});

// The app to call all the elements together
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="app-box-wrapper">
      <ApplicationDrawer/>
      <ApplicationBar/>
      <ApplicationContent/>
    </div>
  </MuiThemeProvider>
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('Root', () => Root);
AppRegistry.runApplication('Root', {
  rootTag: document.getElementById('react-root')
})
