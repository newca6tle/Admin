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

const initialState = {
  drawer: false,
  resource: {
    data: [
      {
        "id": 1,
        "name": "Product 1",
        "image": "dog1.jpg"
      },
      {
        "id": 2,
        "name": "Product 2",
        "image": "dog1.jpg"
      },
      {
        "id": 3,
        "name": "Product 3",
        "image": "dog1.jpg"
      },
      {
        "id": 4,
        "name": "Product 4",
        "image": "dog1.jpg"
      },
      {
        "id": 5,
        "name": "Product 5",
        "image": "dog1.jpg"
      }
    ]
  }
};

var data1 = [
  {
    "id": 10,
    "name": "Product 10",
    "image": "dog1.jpg"
  },
  {
    "id": 11,
    "name": "Product 11",
    "image": "dog1.jpg"
  },
  {
    "id": 12,
    "name": "Product 12",
    "image": "dog1.jpg"
  },
  {
    "id": 13,
    "name": "Product 13",
    "image": "dog1.jpg"
  },
  {
    "id": 14,
    "name": "Product 14",
    "image": "dog1.jpg"
  }
];

const RESOURCE_READ   = 'RESOURCE_READ';

function resourceRead() {
  return {
    type: RESOURCE_READ
  }
}

function resource (state = initialState.resource, action) {
  switch (action.type) {
    case RESOURCE_READ:
      return {...state, data: [...state.data, ...data1]};

    default:
      return state
  }
}

const TOGGLE_DRAWER   = 'TOGGLE_DRAWER';
const CLOSE_DRAWER    = 'CLOSE_DRAWER';

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
  drawer,
  resource
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

/*
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

ApplicationContent = connect(
  mapStateToPropsApplicationContent,
  mapDispatchToPropsApplicationContent
)(ApplicationContent)
*/

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
