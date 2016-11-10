import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { toggleDrawer } from '../actions';
// Material UI
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mapStateToProps = (state) => ({
  navigation: state.navigation
})
const mapDispatchToProps = dispatch => ({
  handleToggle: (index) => dispatch(toggleDrawer())
});

const ApplicationBar = React.createClass({
  render() {
    let props = this.props;
    let title = (
        <span className="appLabel">
          {capitalizeFirstLetter(props.navigation)}
        </span>
    );

    return(
    <AppBar
      title={title}
      onLeftIconButtonTouchTap={()=>{props.handleToggle()}}
    />);
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ApplicationBar);
