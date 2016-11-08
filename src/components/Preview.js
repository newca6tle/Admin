import React from 'react';
import { connect } from 'react-redux';
import ApplicationBar from './ApplicationBar';
import ApplicationDrawer from './ApplicationDrawer';
import { View } from 'react-native';
// Styles
import styles from '../styleJS';

const mapStateToProps = (props, { params: { itemId } }) => ({
  itemId
});

let Preview = ({ itemId, children }) => {
  return (
    <div className="appBoxWrapper">
      <ApplicationBar/>
      <ApplicationDrawer/>
      <br/>
      <br/>
      <h1><p>This is where our preview is going to be.</p></h1>
    </div>
  )
}

export default connect(mapStateToProps)(Preview);
