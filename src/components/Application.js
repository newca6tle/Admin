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
        <h1><p>Start developing on your mobile responsive webpage by clicking on the following.</p></h1>
        <h1>
          <div>
            <Link to={`/content`} onClick={()=>{contentNavigation()}}><RaisedButton label="CONTENT EDITOR" primary={true} style={style} /></Link>
            <Link to={`/preview`} onClick={()=>{previewNavigation()}}><RaisedButton label="PREVIEW EDITOR" primary={true} style={style} /></Link>
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
