import React from 'react';
import { connect } from 'react-redux';
import { closeDrawer, homeNavigation, contentNavigation, previewNavigation } from '../actions';
import { Link } from 'react-router';
// Material UI
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

const mapStateToProps = ({ drawer }) => ({
    drawer
});

const mapDispatchToProps = dispatch => ({
    handleToggle: () => dispatch(closeDrawer()),
    homeNavigation: () => dispatch(homeNavigation()),
    contentNavigation: () => dispatch(contentNavigation()),
    previewNavigation: () => dispatch(previewNavigation())
});

const ApplicationDrawer = React.createClass({
  render() {
    let props = this.props;
    return (
      <Drawer
        docked={false}
        width={200}
        open={props.drawer}
        onRequestChange={()=>{props.handleToggle()}}
      >
        <AppBar title="Menu" showMenuIconButton={false}/>
        <Link to={`/`} onClick={()=>{props.homeNavigation(),props.handleToggle()}}><MenuItem>Home</MenuItem></Link>
        <Link to={`/content`} onClick={()=>{props.contentNavigation(),props.handleToggle()}}><MenuItem>Content</MenuItem></Link>
        <Link to={`/preview`} onClick={()=>{props.previewNavigation(),props.handleToggle()}}><MenuItem>Preview</MenuItem></Link>
        </Drawer>
    );
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ApplicationDrawer);
