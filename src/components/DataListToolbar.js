import React from 'react';
import { connect } from 'react-redux';
import { addItem, filterItem, sortItem } from '../actions';
// Material UI
import { View } from 'react-native';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
// Styles
import styles from '../styleJS';

const mapDispatchToProps = dispatch => ({
  addItem: (data) => dispatch(addItem(data)),
  onFilter: query => dispatch(filterItem(query)),
  onSort: () => dispatch(sortItem())
});

const DataListToolbar = React.createClass({
  render() {
    let props = this.props;
    return (
      <View style={styles.DataListToolbarBox}>
        <View style={styles.DataListToolbarWrapper}>
          <Toolbar>
            <ToolbarGroup>
              <input
                onChange={e => props.onFilter(e.target.value)}
                className='search'
                type='search'
                placeholder='Search' />
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton onClick={()=>{props.onSort()}} iconClassName="material-icons">sort</IconButton>
              <IconButton onClick={()=>{props.addItem(
                data()
              )}} iconClassName="material-icons">add</IconButton>
            </ToolbarGroup>
          </Toolbar>
        </View>
      </View>
    )
  }
});

function data() {
  var randomWords = require('random-words');
  return {
    name: randomWords({ min: 2, max: 5, join: ' ' }),
    description: randomWords({ min: 5, max: 10, join: ' ' }),
    image: 'http://2.bp.blogspot.com/-fJfEeR0_8_Y/Ta1yk9XfIxI/AAAAAAAAAro/TREm-PKHtNg/s1600/yurbuds.jpg',
    featured: false
  }
}

export default connect(null,mapDispatchToProps)(DataListToolbar);
