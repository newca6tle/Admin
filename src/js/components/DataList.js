import React from 'react';
import {View, ScrollView} from 'react-native';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import styles from '../Styles';

// Everything down here is DataListToolbar
let DataListToolbar = () => {
  return (
    <View style={styles.DataListToolbarBox}>
      <View style={styles.DataListToolbarWrapper}>
        <Toolbar>
          <ToolbarGroup>
            <IconButton iconClassName="material-icons">search</IconButton>
          </ToolbarGroup>
          <ToolbarGroup>
            <IconButton iconClassName="material-icons">sort</IconButton>
            <IconButton iconClassName="material-icons">add</IconButton>
          </ToolbarGroup>
        </Toolbar>
      </View>
    </View>
  )
}

// Everything below here is for the DataList
let DataList = () => {
  var _scrollView: ScrollView;
  return (
    <View style={styles.dataListBox}>
      <View style={styles.dataListWrapper}>
        <DataListToolbar/>
        <View style={styles.dataListContentBox}>
          <View style={styles.dataListContentWrapper}>
            <ScrollView ref={(scrollView) => { _scrollView = scrollView; }}
              scrollEventThrottle={200}>
              <List>
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
                  <div className="listItemBox">
                    <div className="listItemWrapper">
                      <div className="listItemImageBox">
                        <img src="../images/dog3.png"/>
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
                  <div className="listItemBox">
                    <div className="listItemWrapper">
                      <div className="listItemImageBox">
                        <img src="../images/dog5.jpg"/>
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
                  <div className="listItemBox">
                    <div className="listItemWrapper">
                      <div className="listItemImageBox">
                        <img src="../images/dog4.jpg"/>
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
              </List>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  )
}

// modify this code for DataList
/*
const mapStateToPropsDataList = (state) => {
  return {
    data: state.resource.data
  }
}

const mapDispatchToPropsDataList = (dispatch) => {
  return {
    read: ()=>{ resourceRead(); }
  }
}


DataList = connect(
  mapStateToPropsDataList,
  mapDispatchToPropsDataList
)(DataList)
*/

export default DataList;
