import React from 'react';
import ReactDOM from 'react-dom';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { nextItem, selectItem, unsortItem } from '../actions';
// Material UI
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
// Used for Lazy Loading
import LazyLoad from 'react-lazy-load';
// Styles
import styles from '../styleJS';
// Used for search
import fuzzysearch from 'fuzzysearch';

const matches = (filter, item) =>
  fuzzysearch(filter, item.name.toString());

  // Used to perform sort on name in alphabetical order
  function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }

const mapStateToProps = ( {resource, resourceFilter, resourceSort} ) => {
  return {
    resource: resourceSort ? resource.sort(compare) : resource.filter(c => matches(resourceFilter, c))
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnNext: () => dispatch(nextItem()),
    handleOnSelect: (id) => dispatch(selectItem(id)),
    onSort: () => dispatch(unsortItem())

  }
};

const DataListContent = React.createClass({
  componentDidUpdate(prevProps, prevState){
    this.props.onSort();
  },

  render() {
  let props = this.props;
  var listItems = props.resource.map((item) => {
    return (
      <ListItem key={item.id.toString()} onClick={()=>{props.handleOnSelect(item.id)}}>
        <Link to={`/content/item/${item.id.toString()}`}>
          <div className="listItemBox">
            <div className="listItemWrapper">
              <div className="listItemImageBox">
                <LazyLoad>
                  <div className="listItemImageWrapper">
                    <ImageImage item={item.image}/>
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
        </Link>
      </ListItem>
    );
  });

  return (
      <View style={styles.dataListContentBox}>
        <View style={styles.dataListContentWrapper}>
          <InfiniteScrollView
            scrollEventThrottle={500}
            >
            <List id="listView">
              {listItems}
            </List>
          </InfiniteScrollView>
        </View>
      </View>
    );
  }
});

var InfiniteScrollView = React.createClass({
  loading: false,

  handleScroll: function(e) {
    var height = this._scrollView.getInnerViewNode().childNodes[0].clientHeight;
    var offSet = 200;
    var scrollTop = this._scrollView.getScrollableNode().clientHeight + this._scrollView.getScrollableNode().scrollTop;

    if (scrollTop > (height - offSet) && !this.loading) {
      this.loading = true;
      this.props.handleOnNext();
    }
  },

  render: function() {
    return (
      <ScrollView
        {...this.props}
        ref={(scrollView) => { this._scrollView = scrollView; }}
        onScroll={(e)=>{this.handleScroll(e)}}
        >
        {this.props.children}
      </ScrollView>
    );
  }
});

function ImageImage(props) {
    return <img src={props.item}/>;
}

export default connect(mapStateToProps,mapDispatchToProps)(DataListContent);
