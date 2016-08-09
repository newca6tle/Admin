import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {List, ListItem} from 'material-ui/List';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var styles = StyleSheet.create({
  "appBoxWrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "dataFormBoxWrapper": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": blue500
  },
  "dataFormBox": {
    "flexGrow": 1
  }
});

const initialState = {
  drawer: false,
  collection: {
    items: [
      {
        "name": "product",
        "label": "Product",
        "fields": [
          {
            "name": "name",
            "label": "Name",
            "type": {
              "control": "Text",
              "multiLine": false,
              "minLength": 0,
              "maxLength": 50
            },
            "required": false,
            "readOnly": false,
            "description": ""
          },
          {
            "name": "price",
            "label": "Selling Price",
            "type": {
              "control": "Number",
              "allowNegative": false,
              "min": 0,
              "max": 50,
              "format": "#,###.00"
            },
            "required": false,
            "readOnly": false,
            "description": ""
          }
        ],
        "list": {
          "itemsPerPage": 20,
          "sortFields": [
            "name",
            "createdDate"
          ],
          "mapFields": {
            "name": {
              "field" : "name"
            },
            "item1": {
              "field": "price"
            }
          },
          "template": "template_01"
        },
        "form": {
          "label": "Overview",
          "groups": [
            {
              "label": "Overview",
              "rows": [
                {
                  "columns": [
                    {
                      "field": "name"
                    },
                    {
                      "field": "createdDate"
                    }
                  ]
                },
                {
                  "columns": [
                    {
                      "field": "description"
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  }
};

const TOGGLE_DRAWER   = 'TOGGLE_DRAWER';
const CLOSE_DRAWER    = 'CLOSE_DRAWER';

function toggleDrawer() {
  return {type: TOGGLE_DRAWER}
}

function closeDrawer() {
  return {type: CLOSE_DRAWER}
}

function drawer(state = initialState.drawer, action) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return !state

    case CLOSE_DRAWER:
      return false

    default:
      return state
  }
}

let collection = (state = initialState.collection, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const cmsAdminApp = combineReducers({
  drawer,
  collection
})

let store = createStore(cmsAdminApp)

const mapStateToPropsAppDrawer = (state) => {
  return {
    open: state.drawer,
    collections: state.collection.items
  }
}

const mapDispatchToPropsAppDrawer = (dispatch) => {
  return {
    handleToggle: (index) => {
      dispatch(toggleDrawer())
    },

    handleClose: (index) => {
      dispatch(closeDrawer())
    }
  }
}

let AppDrawer = ({open, handleClose, collections}) => {
  return (
    <Drawer
      docked={false}
      width={200}
      open={open}
      onRequestChange={() => {handleClose()}}
    >
      <MenuItem onTouchTap={() => {handleClose()}}>Home</MenuItem>
      <MenuItem onTouchTap={() => {handleClose()}}>Content</MenuItem>
    </Drawer>
  )
}

AppDrawer = connect(
  mapStateToPropsAppDrawer,
  mapDispatchToPropsAppDrawer
)(AppDrawer)

const mapStateToPropsAppContent = (state) => {
  return {
    listItemTemplate: '<div>Hello, World</div>'
  }
}

const mapDispatchToPropsAppContent = (dispatch) => {
  return {
    renderListItem: ()=>{ return('<div><i class="material-icons">more_vert</i></div>')}
  }
}

let AppContent = ({listItemTemplate, renderListItem}) => {
  return (
    <div className="app-content-box">
      <div className="app-content-box-wrapper">
        <div className="data-list-container-box">
          <div className="data-list-container-box-wrapper">
            <Toolbar>
              <ToolbarGroup>
                <TextField hintText="Search"/>
              </ToolbarGroup>
              <ToolbarGroup >
                <DropDownMenu value={1}>
                  <MenuItem value={1} primaryText="Sort by Name" />
                  <MenuItem value={2} primaryText="All Voice" />
                  <MenuItem value={3} primaryText="All Text" />
                  <MenuItem value={4} primaryText="Complete Voice" />
                  <MenuItem value={5} primaryText="Complete Text" />
                  <MenuItem value={6} primaryText="Active Voice" />
                  <MenuItem value={7} primaryText="Active Text" />
                </DropDownMenu>
              </ToolbarGroup>
            </Toolbar>
            <div className="data-list-box">
              <div className="data-list-box-wrapper">
                <List>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                  <Divider/>
                  <ListItem
                    primaryText="Show your status"
                    secondaryText="Your status is visible to everyone you use with"
                  />
                </List>
              </div>
            </div>
          </div>
        </div>
        <View style={styles.dataFormBox}>
          <View style={styles.dataFormBoxWrapper}>
            Form 1
          </View>
        </View>
      </div>
    </div>
  )
}

AppContent = connect(
  mapStateToPropsAppContent,
  mapDispatchToPropsAppContent
)(AppContent)


const App = () => (
  <MuiThemeProvider>
    <View style={styles.appBoxWrapper}>
      <AppDrawer/>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onTouchTap={()=>{store.dispatch(toggleDrawer())}}
      />
      <AppContent/>
    </View>
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
