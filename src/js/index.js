import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Imports all the components from Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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
import Toggle from 'material-ui/Toggle';
import Slider from 'material-ui/Slider';

// This is required to simulate tapping.
injectTapEventPlugin();

var styles = StyleSheet.create({

  appContentBox: {
    position: 'relative',
    flexGrow: 1
  },

  appContentWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataListBox: {
    position: 'relative',
    width: 300
  },

  dataListWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column'
  },

  dataListToolBox:{
    position: 'relative'
  },

  dataListToolWrapper:{
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormBox: {
    position: 'relative',
    flexGrow: 1,
    borderLeftColor: grey400,
    borderLeftWidth: 1
  },

  dataFormWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column'
  },

  dataFormToolBox: {
    position: 'relative',
  },

  dataFormToolWrapper: {
    // position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataListContentBox: {
    position: 'relative',
    flexGrow: 1
  },

  dataListContentWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupBox: {
    position: 'relative',
    flexGrow: 1,
    // marginLeft: 5
  },

  dataFormGroupWrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupRowBox: {
    position: 'relative',
    flexGrow: 1,
    padding: 17
  },

  dataFormGroupRowWrapper: {
    // position:'absolute',
    flexDirection:'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupColLabelBox: {
    position: 'relative',
    flexGrow: 1
  },

  dataFormGroupColLabelWrapper: {
    position: 'absolute',
    flexDirection:'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupFieldBox: {
    position: 'relative',
    flexGrow: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'green'
  },

  dataFormGroupFieldWrapper: {
    //position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupColBox: {
    position:'relative',
    flexGrow: 1,
    borderWidth: 1,
    borderColor: 'red',
  },

  dataFormGroupColWrapper: {
    //position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

  dataFormGroupLabelBox: {
    position: 'relative',
    width: 'auto',
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'blue',
    justifyContent: 'center',
    //alignItems: 'center',
  },

  dataFormGroupLabelWrapper: {
    // position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

});

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

// AppBarElement shown in the interface
const AppBarElement = () => (
  <AppBar
    title="Content"
    onLeftIconButtonTouchTap={()=>{store.dispatch(toggleDrawer())}}
    iconElementRight={<FlatButton label="Preview" />}
  />
);

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

// Everything below here is for the AppContentDataList
let AppContentDataListElement = () => {
  var _scrollView: ScrollView;
  return (
    <View style={styles.dataListBox}>
      <View style={styles.dataListWrapper}>
        <AppContentDataListToolbarElement/>
        <View style={styles.dataListContentBox}>
          <View style={styles.dataListContentWrapper}>
            <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
              scrollEventThrottle={200}>
              <List>
                <ListItem>
                  <div className="itemList">
                    <div className="listImage">
                      <img src="../images/dog1.jpg"/>
                    </div>
                    <div className="listText">
                      <div className='labelCSS'>
                        Title Here
                      </div>
                      <div className='descriptionCSS'>
                        Your status is visible to everyone you use.
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider/>
                <ListItem>
                  <div className="itemList">
                    <div className="listImage">
                      <img src="../images/dog5.jpg"/>
                    </div>
                    <div className="listText">
                      <div className='labelCSS'>
                        Title Here
                      </div>
                      <div className='descriptionCSS'>
                        Your status is visible to everyone you use.
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider/>
                <ListItem>
                  <div className="itemList">
                  <div className="listImage">
                    <img src="../images/dog3.png"/>
                  </div>
                    <div className="listText">
                      <div className='labelCSS'>
                        Title Here
                      </div>
                      <div className='descriptionCSS'>
                        Your status is visible to everyone you use.
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider/>
                <ListItem>
                  <div className="listItemBox">
                    <div className="listItemWrapper">
                      <div className="listItemImageBox">
                        <img src="../images/dog1.jpg"/>
                      </div>
                      <div className="listItemTextBox">
                        <div className="listItemTextWrapper">
                          <div className="listItemTextTitleBox">
                            <div className="listItemTextTitleWrapper">
                              <span>I am very very very long title</span>
                            </div>
                          </div>
                          <div className="listItemTextDescriptionBox">
                            <div className="listItemTextDescriptionWrapper">
                              <p>I am very very very very very very very very very very very very very very long description</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider/>
                <ListItem>
                  <div className="itemList">
                    <div className="listText">
                      <div className='labelCSS'>
                        Title Here
                      </div>
                      <div className='descriptionCSS'>
                        Your status is visible to everyone you use.
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider/>
                <ListItem>
                  <div className="itemList">
                    <div className="listImage">
                      <img src="../images/dog2.jpg" className="img-circle" height="100%"/>
                    </div>
                    <div className="listText">
                      <div className='labelCSS'>
                        Title Here
                      </div>
                      <div className='descriptionCSS'>
                        Your status is visible to everyone you use.
                      </div>
                    </div>
                  </div>
                </ListItem>
              </List>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

let AppContentDataListToolbarElement = () => {
  return (
    <View style={styles.dataListToolBox}>
      <View style={styles.dataListToolWrapper}>
        <Toolbar>
          <ToolbarGroup>
            <AppContentDataListToolbarSearchButton/>
          </ToolbarGroup>
          <ToolbarGroup>
            <AppContentDataListToolbarSortButton/>
            <AppContentDataListToolbarAddButton/>
          </ToolbarGroup>
        </Toolbar>
      </View>
    </View>
  )
}

let AppContentDataListToolbarSearchButton = () => {
  return (
    <IconButton iconClassName="material-icons">search</IconButton>
  )
}

let AppContentDataListToolbarSortButton = () => {
  return (
    <IconButton iconClassName="material-icons">sort</IconButton>
  )
}

let AppContentDataListToolbarAddButton = () => {
  return (
    <IconButton iconClassName="material-icons">add</IconButton>
  )
}

// Everything below here is for the AppContentFormList
let AppContentDataFormElement = () => {
  var _scrollView: ScrollView;
  return (
    <View style={styles.dataFormBox}>
      <View style={styles.dataFormWrapper}>
        <AppContentDataFormToolbar/>
        <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
          scrollEventThrottle={200}>
          <View style={styles.dataFormGroupBox}>
            <View style={styles.dataFormGroupWrapper}>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <div className="formImage">
                      <img src="images/furniture.jpg" className="formImageImg"/>
                  </div>
                </View>
              </View>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <View style={styles.dataFormGroupColBox}>
                    <View style={styles.dataFormGroupColWrapper}>
                      <View style={styles.dataFormGroupLabelBox}>
                        <View style={styles.dataFormGroupLabelWrapper}>
                          <Text className="labelCSS">Name</Text>
                        </View>
                      </View>
                      <View style={styles.dataFormGroupFieldBox}>
                        <View style={styles.dataFormGroupFieldWrapper}>
                          <TextField fullWidth={true}/>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.dataFormGroupColBox}>
                    <View style={styles.dataFormGroupColWrapper}>
                      <View style={styles.dataFormGroupLabelBox}>
                        <View style={styles.dataFormGroupLabelWrapper}>
                          <Text className="labelCSS">Date</Text>
                        </View>
                      </View>
                      <View style={styles.dataFormGroupFieldBox}>
                        <View style={styles.dataFormGroupFieldWrapper}>
                          <DatePicker fullWidth={true} hintText="Click to select date"/>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <View style={styles.dataFormGroupLabelBox}>
                    <View style={styles.dataFormGroupLabelWrapper}>
                      <Text className="labelCSS">Description</Text>
                    </View>
                  </View>
                  <View style={styles.dataFormGroupFieldBox}>
                    <View style={styles.dataFormGroupFieldWrapper}>
                      <TextField fullWidth={true}/>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.dataFormGroupRowBox}>
                <View style={styles.dataFormGroupRowWrapper}>
                  <Chip>Gadget</Chip>
                </View>
              </View>
              <Divider />
              <View style={styles.dataFormGroupBox}>
                <View style={styles.dataFormGroupWrapper}>
                  <View style={styles.dataFormGroupRowBox}>
                    <View style={styles.dataFormGroupRowWrapper}>
                      <View style={styles.dataFormGroupColBox}>
                        <View style={styles.dataFormGroupColWrapper}>
                          <View style={styles.dataFormGroupFieldBox}>
                            <View style={styles.dataFormGroupFieldWrapper}>
                              <Slider defaultValue={0.5} description="Rating"/>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.dataFormGroupColBox}>
                        <View style={styles.dataFormGroupColWrapper}>
                          <View style={styles.dataFormGroupLabelBox}>
                            <View style={styles.dataFormGroupLabelWrapper}>
                              <Text className="labelCSS">Hidden</Text>
                            </View>
                          </View>
                          <View style={styles.dataFormGroupFieldBox}>
                            <View style={styles.dataFormGroupFieldWrapper}>
                              <Toggle/>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

let AppContentDataFormToolbar = () => {
  return (
    <View style={styles.dataFormToolBox}>
      <View style={styles.dataFormToolWrapper}>
        <Toolbar>
          <ToolbarGroup/>
          <ToolbarGroup>
            <AppContentDataFormToolbarVisibilityButton/>
            <AppContentDataFormToolbarSaveButton/>
            <AppContentDataFormToolbarDeleteButton/>
          </ToolbarGroup>
        </Toolbar>
      </View>
    </View>
  )
}

let AppContentDataFormToolbarVisibilityButton = () => {
  return (
    <IconButton iconClassName="material-icons">visibility</IconButton>
  )
}

let AppContentDataFormToolbarSaveButton = () => {
  return (
    <IconButton iconClassName="material-icons">save</IconButton>
  )
}

let AppContentDataFormToolbarDeleteButton = () => {
  return (
    <IconButton iconClassName="material-icons">delete</IconButton>
  )
}

// AppContentElement shown in the interface
let AppContentElement = () => {
  return (
    <View style={styles.appContentBox}>
      <View style={styles.appContentWrapper}>
        <AppContentDataListElement/>
        <AppContentDataFormElement/>
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

// DrawerElement shown in the interface
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

// Links the the mapStateToPropsAppDrawer and mapDispatchToPropsAppDrawer to DrawerElement
DrawerElement  = connect(
  mapStateToPropsAppDrawer,
  mapDispatchToPropsAppDrawer
)(DrawerElement)

// Use to control theme
const muiTheme = getMuiTheme({

// Green Forest Theme PH(green100, green500, green700) A(deepOrangeA200)
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

// Mighty Black Theme PH(black100, black500, black700, grey800) A(deepYellowA200)
/*  palette: {
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

// Mighty Grey Theme PH(black100, black500, black700, grey800) A(deepYellowA200)
/*  palette: {
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

// The app to call all the elements together
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div className="app-box-wrapper">
      <DrawerElement/>
      <AppBarElement/>
      <AppContentElement/>
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
