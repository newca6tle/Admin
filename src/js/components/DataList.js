import React from 'react';
import {View, ScrollView} from 'react-native';
import { Provider, connect } from 'react-redux'
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import styles from '../Styles';
import LazyLoad from 'react-lazy-load';

// DataFormToolbar to render the toolbar and its buttons
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

var InfiniteScrollView = React.createClass({
  loading: false,

  /*
    propTypes: {
      'data-OnNext': React.PropTypes.func
    },
  */

  handleScroll: function(e) {
    var height = this._scrollView.getInnerViewNode().childNodes[0].clientHeight;
    var offSet = 200;
    var scrollTop = this._scrollView.getScrollableNode().clientHeight + this._scrollView.getScrollableNode().scrollTop;

    if (scrollTop > (height - offSet) && !this.loading) {
      this.loading = true;
      this.props.onNext();
    }
  },

  render: function() {
    return (
      <ScrollView
        {...this.props}
        ref={(scrollView) => { this._scrollView = scrollView; }}
        onScroll={(e)=>{this.handleScroll(e)}}
        onContentSizeChange={this.loading=false}>
          {this.props.children}
      </ScrollView>
    );
  }
});

function ImageImage(props) {
    return <img src={props.item}/>;
}

//DataListContent renders the list of items
let DataListContent = ({items, handleOnNext, onSelect}) => {
  console.log('items', items.length)
  var listItems = items.map((item, index) => {
    return (
      <div>
        <ListItem key={index} onClick={ () => {onSelect(index)} }>
          <div className="listItemBox">
            <div className="listItemWrapper">
              <div className="listItemImageBox">
                <LazyLoad>
                  <div className="listItemImageWrapper">
                    <ImageImage item={item.image[item.starred].file}/>
                  </div>
                </LazyLoad>
              </div>
              <div className="listItemTextBox">
                <div className="listItemTextWrapper">
                  <div className="listItemTextTitleBox">
                    <div className="listItemTextTitleWrapper">
                      <span>{item.name}</span>
                    </div>
                  </div>
                  <div className="listItemTextDescriptionBox">
                    <div className="listItemTextDescriptionWrapper">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ListItem>
        <Divider/>
      </div>
    );
  });

  return (
      <View style={styles.dataListContentBox}>
        <View style={styles.dataListContentWrapper}>
          <InfiniteScrollView
            scrollEventThrottle={500}
            onNext={()=>{handleOnNext();}}
            >
            <List id="listView">
              {listItems}
            </List>
          </InfiniteScrollView>
        </View>
      </View>
    )
}

const RESOURCE_READ   = 'RESOURCE_READ';
const RESOURCE_SELECT = 'RESOURCE_SELECT';

const mapStateToPropsDataListContent = (state) => {
  return {
    items: state.resource.data
  }
}

const mapDispatchToPropsDataListContent = (dispatch) => {
  return {
    handleOnNext: () => {
      dispatch({type: RESOURCE_READ})
    },

    onSelect: (index) => {
      dispatch({type: RESOURCE_SELECT, index})
    }
  }
}

// Links the the mapStateToPropsAppDrawer and mapDispatchToPropsAppDrawer to ApplicationDrawer
DataListContent  = connect(
  mapStateToPropsDataListContent,
  mapDispatchToPropsDataListContent
)(DataListContent)

// Everything below here is for the DataList
let DataList = () => {
  return (
    <View style={styles.dataListBox}>
      <View style={styles.dataListWrapper}>
        <DataListToolbar/>
        <DataListContent/>
      </View>
    </View>
  )
}

export default DataList;
