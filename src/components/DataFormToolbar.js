import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// Material UI
import { View } from 'react-native';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
// Styles
import styles from '../styleJS';

const DataFormToolbar = ({ itemId }) => {
  let formTools = itemId ? (
    <Toolbar>
      <ToolbarGroup>
        <Link to={`/content/item/${itemId}/update`}><IconButton iconClassName="material-icons">edit</IconButton></Link>
        <Link to={`/content/item/${itemId}/delete`}><IconButton iconClassName="material-icons">delete</IconButton></Link>
      </ToolbarGroup>
      <ToolbarGroup>
      </ToolbarGroup>
    </Toolbar>
  ) : (<Toolbar />);

  return (
    <View style={styles.DataFormToolbarBox}>
      <View style={styles.DataFormToolbarWrapper}>
        {formTools}
      </View>
    </View>
  )
}

export default DataFormToolbar;
