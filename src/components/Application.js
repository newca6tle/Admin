import React from 'react';
import { View } from 'react-redux';
import { connect } from 'react-redux';
import { contentNavigation, previewNavigation } from '../actions';
import { Link, browserHistory } from 'react-router';
// Material UI
import RaisedButton from 'material-ui/RaisedButton';
// Components
import ApplicationBar from './ApplicationBar';
import ApplicationDrawer from './ApplicationDrawer';
// Styles
import styles from '../styleJS';

const style = {
  margin: 12
};

const mapStateToProps = (state) => ({
  navigation: state.navigation
});

const mapDispatchToProps = dispatch => ({
    contentNavigation: () => dispatch(contentNavigation()),
    previewNavigation: () => dispatch(previewNavigation())
});

let Application = ({ navigation, contentNavigation, previewNavigation, children }) => {
  return (
    navigation.toString() === "home" ?
      <div className="appBoxWrapper">
        <ApplicationBar/>
        <ApplicationDrawer/>
        <br/>
        <br/>
        <br/>
        <h1 className="headline">Hello there!</h1>
        <h1><p>Get started by editing content or changing your app below.</p></h1>
        <h1>
          <div>
            <Link to={`/content`} onClick={()=>{contentNavigation()}}><RaisedButton label="EDIT CONTENT" primary={true} style={style} /></Link>
            <Link to={`/preview`} onClick={()=>{previewNavigation()}}><RaisedButton label="PREVIEW APP" primary={true} style={style} /></Link>
          </div>
        </h1>
      </div>
     :
      <div className="appBoxWrapper">
        <ApplicationBar/>
        <ApplicationDrawer/>
        {children}
      </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Application);
