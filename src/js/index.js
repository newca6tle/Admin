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
  active: 0,
  resource: {
    data: [
      {
        "id": 1,
        "name": "Product 1",
        "description": "Existing Product 1",
        "starred": 0,
        "image": [
          {
            "imageID": 1,
            "file": "../images/dog1.jpg"
          },
          {
            "imageID": 2,
            "file": "../images/dog2.jpg"
          },
          {
            "imageID": 3,
            "file": "../images/dog3.png"
          },
          {
            "imageID": 4,
            "file": "../images/dog4.jpg"
          },
          {
            "imageID": 5,
            "file": "../images/dog5.jpg"
          },
          {
            "imageID": 6,
            "file": "../images/dog6.jpg"
          }
        ]
      },
      {
        "id": 2,
        "name": "Product 2",
        "description": "Existing Product 2",
        "starred": 0,
        "image": [
          {
            "imageID": 1,
            "file": "../images/dog2.jpg"
          },
          {
            "imageID": 2,
            "file": "../images/dog3.png"
          },
          {
            "imageID": 3,
            "file": "../images/dog4.jpg"
          },
          {
            "imageID": 4,
            "file": "../images/dog5.jpg"
          },
          {
            "imageID": 5,
            "file": "../images/dog6.jpg"
          },
          {
            "imageID": 6,
            "file": "../images/dog1.jpg"
          }
        ]
      },
      {
        "id": 3,
        "name": "Product 3",
        "description": "Existing Product 3",
        "starred": 0,
        "image": [
          {
            "imageID": 1,
            "file": "../images/dog3.png"
          },
          {
            "imageID": 2,
            "file": "../images/dog4.jpg"
          },
          {
            "imageID": 3,
            "file": "../images/dog5.jpg"
          },
          {
            "imageID": 4,
            "file": "../images/dog6.jpg"
          },
          {
            "imageID": 5,
            "file": "../images/dog1.jpg"
          },
          {
            "imageID": 6,
            "file": "../images/dog2.jpg"
          }
        ]
      },
      {
        "id": 4,
        "name": "Product 4",
        "description": "Existing Product 4",
        "starred": 0,
        "image": [
          {
            "imageID": 1,
            "file": "../images/dog4.jpg"
          },
          {
            "imageID": 2,
            "file": "../images/dog5.jpg"
          },
          {
            "imageID": 3,
            "file": "../images/dog6.jpg"
          },
          {
            "imageID": 4,
            "file": "../images/dog1.jpg"
          },
          {
            "imageID": 5,
            "file": "../images/dog2.jpg"
          },
          {
            "imageID": 6,
            "file": "../images/dog3.png"
          }
        ]
      },
      {
        "id": 5,
        "name": "Product 5",
        "description": "Existing Product 5",
        "starred": 0,
        "image": [
          {
            "imageID": 1,
            "file": "../images/dog5.jpg"
          },
          {
            "imageID": 2,
            "file": "../images/dog6.jpg"
          },
          {
            "imageID": 3,
            "file": "../images/dog1.jpg"
          },
          {
            "imageID": 4,
            "file": "../images/dog2.jpg"
          },
          {
            "imageID": 5,
            "file": "../images/dog3.png"
          },
          {
            "imageID": 6,
            "file": "../images/dog4.jpg"
          }
        ]
      },
      {
        "id": 6,
        "name": "Product 6",
        "description": "Existing Product 6",
        "starred": 0,
        "image": [
          {
            "imageID": 1,
            "file": "../images/dog6.jpg"
          },
          {
            "imageID": 2,
            "file": "../images/dog1.jpg"
          },
          {
            "imageID": 3,
            "file": "../images/dog2.jpg"
          },
          {
            "imageID": 4,
            "file": "../images/dog3.png"
          },
          {
            "imageID": 5,
            "file": "../images/dog4.jpg"
          },
          {
            "imageID": 6,
            "file": "../images/dog5.jpg"
          }
        ]
      },
    ]
  }
};

var data1 = [
  {
    "id": 1,
    "name": "Product 1",
    "description": "Additional Product 1",
    "starred": 0,
    "image": [
      {
        "imageID": 1,
        "file": "../images/dog1.jpg"
      },
      {
        "imageID": 2,
        "file": "../images/dog2.jpg"
      },
      {
        "imageID": 3,
        "file": "../images/dog3.png"
      },
      {
        "imageID": 4,
        "file": "../images/dog4.jpg"
      },
      {
        "imageID": 5,
        "file": "../images/dog5.jpg"
      },
      {
        "imageID": 6,
        "file": "../images/dog6.jpg"
      }
    ]
  },
  {
    "id": 2,
    "name": "Product 2",
    "description": "Additional Product 2",
    "starred": 0,
    "image": [
      {
        "imageID": 1,
        "file": "../images/dog2.jpg"
      },
      {
        "imageID": 2,
        "file": "../images/dog3.png"
      },
      {
        "imageID": 3,
        "file": "../images/dog4.jpg"
      },
      {
        "imageID": 4,
        "file": "../images/dog5.jpg"
      },
      {
        "imageID": 5,
        "file": "../images/dog6.jpg"
      },
      {
        "imageID": 6,
        "file": "../images/dog1.jpg"
      }
    ]
  },
  {
    "id": 3,
    "name": "Product 3",
    "description": "Additional Product 3",
    "starred": 0,
    "image": [
      {
        "imageID": 1,
        "file": "../images/dog3.png"
      },
      {
        "imageID": 2,
        "file": "../images/dog4.jpg"
      },
      {
        "imageID": 3,
        "file": "../images/dog5.jpg"
      },
      {
        "imageID": 4,
        "file": "../images/dog6.jpg"
      },
      {
        "imageID": 5,
        "file": "../images/dog1.jpg"
      },
      {
        "imageID": 6,
        "file": "../images/dog2.jpg"
      }
    ]
  },
  {
    "id": 4,
    "name": "Product 4",
    "description": "Additional Product 4",
    "starred": 0,
    "image": [
      {
        "imageID": 1,
        "file": "../images/dog4.jpg"
      },
      {
        "imageID": 2,
        "file": "../images/dog5.jpg"
      },
      {
        "imageID": 3,
        "file": "../images/dog6.jpg"
      },
      {
        "imageID": 4,
        "file": "../images/dog1.jpg"
      },
      {
        "imageID": 5,
        "file": "../images/dog2.jpg"
      },
      {
        "imageID": 6,
        "file": "../images/dog3.png"
      }
    ]
  }
];

const RESOURCE_READ   = 'RESOURCE_READ';
const RESOURCE_SELECT = 'RESOURCE_SELECT';
const TOGGLE_DRAWER   = 'TOGGLE_DRAWER';
const CLOSE_DRAWER    = 'CLOSE_DRAWER';
const RESOURCE_STAR   = 'RESOURCE_STAR';
const RESOURCE_DELETE = 'RESOURCE_DELETE';

// Reducer active to to determine item selected in data list item
function active (state = initialState.active, action) {
  switch (action.type) {
    case RESOURCE_SELECT:
      return action.index
    default:
      return state
  }
}

// Reducer resource to
// 1. combine additional item to the existing list item state
// 2. update starred image in within each item
function resource (state = initialState.resource, action) {
  switch (action.type) {
    case RESOURCE_READ:
      return {...state, data: [...state.data, ...data1]};
    case RESOURCE_STAR:
      return {...state,
        data: [
          ...state.data.slice(0, action.activeItem),
           {
             "id": state.data[action.activeItem].id,
             "name": state.data[action.activeItem].name,
             "starred": action.index,
             "image": state.data[action.activeItem].image
           },
           ...state.data.slice(action.activeItem+1, state.data.length)
        ]
      };
    case RESOURCE_DELETE:
      return {...state,
        data: [
          ...state.data.slice(0, action.activeItem),
          {
            "id": state.data[action.activeItem].id,
            "name": state.data[action.activeItem].name,
            "starred": state.data[action.activeItem].starred,
            "image": [
              ...state.data[action.activeItem].image.slice(0,action.index),
              ...state.data[action.activeItem].image.slice(action.index+1, state.data[action.activeItem].image.length)
            ]
          },
          ...state.data.slice(action.activeItem+1, state.data.length)
        ]
      };
    default:
      return state
  }
}

// Reducer drawer to return the state or action of the drawer
function toggleDrawer(text) {
  return {
    type: TOGGLE_DRAWER,
    text
  }
}

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
  active,
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
