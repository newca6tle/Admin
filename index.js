import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

/* Imports all the components from Material UI */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import IconMenu from 'material-ui/IconMenu';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {blue500, green100, green500, green700, deepOrangeA200, grey50, grey100, grey400, grey500, grey700, grey800, deepYellowA200} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Chip from 'material-ui/Chip';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import {indigo500} from 'material-ui/styles/colors';
/* This is required to simulate tapping. */
injectTapEventPlugin();

var styles = StyleSheet.create({

  appContentBox: {
    position: 'relative',
    flexGrow: 1
  },

  appContentBoxWrapper: {
    flexDirection: 'row',
  },

  dataListContainerBox: {
    position: 'relative',
    flexGrow: 1
  },

  dataListContainerBoxWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    flexDirection: 'column'
  },

  dataFormContainerBox: {
    position: 'relative',
    flexGrow: 1
  },

  dataFormContainerBoxWrapper: {
    position: 'absolute',
    left: 0,
    right: 0
  },

  dataListBox: {
    position: 'relative',
    flexGrow: 1,
    left: 0,
    right: 0
  },

  dataListBoxWrapper: {
    position: 'absolute',
    left: 15,
    right: 0
    /* overflow does not seem to work */
  },

  AppFooterBox: {
    position: 'relative',
    flexGrow: 1
  },

  AppFooterBoxWrapper: {
    position: 'absolute',
    left: 0,
    right: 0
  },

  listView: {
    height: 500
  },

  formListBox: {
    height: 500,
    position: 'absolute',
    flexGrow: 1
  },

  formListBoxWrapper: {
    position: 'absolute',
    left: 30,
    right: 0
  },

  stylePaper: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },

  styleItemWrapper: {
    left: 22
  },

  styleChipWrapper: {
    left: 22
  },
});

const TOGGLE_DRAWER   = 'TOGGLE_DRAWER';
const CLOSE_DRAWER    = 'CLOSE_DRAWER';

/* Declaring initial state of the drawer */
const initialState = {
  drawer: false
};

const toolbarStyle = {
  }

/* To return the action call before sending it into the drawer reducer */
function toggleDrawer(text) {
  return {
    type: TOGGLE_DRAWER,
    text
  }
}

/* Drawer reducer to return the state or action */
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

/* Combining all reducers before loading into store. */
const reducers = combineReducers({
  drawer
})

/* Declaring a redux store called store and registering the redux reducer to it. There should only be one store declared. */
let store = createStore(reducers)

/* AppBarElement shown in the interface */
let AppBarElement = () => {
  return (
    <AppBar
      title="Content"
      onLeftIconButtonTouchTap={()=>{store.dispatch(toggleDrawer())}}
      iconElementRight={<FlatButton label="Preview" />}
    />
  )
}

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

/* AppContentElement shown in the interface */
let AppContentElement = () => {
  var _scrollView: ScrollView;
  return (
    <View style={styles.appContentBox}>
      <View style={styles.appContentBoxWrapper}>
        <View style={styles.dataListContainerBox}>
          <View style={styles.dataListContainerBoxWrapper}>
            <Toolbar>
              <ToolbarGroup>
                <IconButton iconClassName="material-icons" tooltip="Search Content">search</IconButton>
              </ToolbarGroup>
              <ToolbarGroup>
                <IconButton iconClassName="material-icons" tooltip="Sort Content">sort</IconButton>
                <IconButton iconClassName="material-icons" tooltip="Add Content">add</IconButton>
              </ToolbarGroup>
            </Toolbar>
            <View style={styles.dataListBox}>
              <View style={styles.dataListBoxWrapper}>
                <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
                  scrollEventThrottle={200} style={[styles.listView]}>
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
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dataFormContainerBox}>
          <View style={styles.dataFormContainerBoxWrapper}>
            <Toolbar>
              <ToolbarGroup>
              </ToolbarGroup>
              <ToolbarGroup>
                <IconButton iconClassName="material-icons" tooltip="Save Item">save</IconButton>
                <IconButton iconClassName="material-icons" tooltip="Delete Item">delete</IconButton>
              </ToolbarGroup>
            </Toolbar>
            <View style={styles.formListBox}>
              <View style={styles.formListBoxWrapper}>
                <View>
                  <Subheader style={{left:0}}>Item</Subheader>
                </View>
                <View style={styles.styleItemWrapper}>
                  <canvas id="myCanvas" style={{border:'1px solid #CCCCCC', width:'200', height:'200'}}/>
                  <TextField hintText="Name"/>
                  <TextField multiLine={true} rows={1} rowsMax={4} hintText="Description"/>
                </View>
                <View>
                  <Subheader>Tags</Subheader>
                </View>
                <View style={styles.styleChipWrapper}>
                  <Chip>Gadget</Chip>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

AppContentElement = connect(
  mapStateToPropsAppContent,
  mapDispatchToPropsAppContent
)(AppContentElement)

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

let AppFooterElement = () => {
  return (
    <View style={styles.appFooterBox}>
      <View style={styles.appFooterBoxWrapper}>
        <Toolbar style={toolbarStyle}>
          <Stepper activeStep={2}>
            <Step>
              <StepLabel>Select theme</StepLabel>
            </Step>
            <Step>
              <StepLabel>Manage Content</StepLabel>
            </Step>
            <Step>
              <StepLabel>Create workflow</StepLabel>
            </Step>
          </Stepper>
        </Toolbar>
      </View>
    </View>
  )
}
/* DrawerElement shown in the interface */
let DrawerElement = ({drawerstate, handleClose}) => {
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

/* Links the the mapStateToPropsAppDrawer and mapDispatchToPropsAppDrawer to DrawerElement */
DrawerElement  = connect(
  mapStateToPropsAppDrawer,
  mapDispatchToPropsAppDrawer
)(DrawerElement)

/* Use to control theme */
const muiTheme = getMuiTheme({

/* Green Forest Theme PH(green100, green500, green700) A(deepOrangeA200)*/
  palette: {
    primary1Color: green500,
    accent1Color: deepOrangeA200
  },
  appBar: {
    color: green500
  },
  toolbar: {
    backgroundColor: green100
  }

/* Mighty Black Theme PH(black100, black500, black700, grey800) A(deepYellowA200)
  palette: {
    primary1Color: grey500,
    accent1Color: deepYellowA200,
    textColor: grey700
  },
  appBar: {
    color: grey800,
    height: 50,
  },
  toolbar: {
    height: 45,
    backgroundColor: grey100
  }*/

/* Mighty Grey Theme PH(black100, black500, black700, grey800) A(deepYellowA200)
    palette: {
      primary1Color: grey400,
      accent1Color: deepYellowA200,
      textColor: grey400
    },
    appBar: {
      color: grey400,
      height: 50,
    },
    toolbar: {
      height: 45,
      backgroundColor: grey100
    }*/
});

/* The app to call all the elements together */
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="app-box-wrapper">
      <DrawerElement/>
      <AppBarElement/>
      <AppContentElement/>
      <AppFooterElement/>
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
