import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { toggleDrawer, previewNavigation } from '../actions';
import { Link } from 'react-router';
// Material UI
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const mapStateToProps = (state) => ({
  navigation: state.navigation
})
const mapDispatchToProps = dispatch => ({
  handleToggle: (index) => dispatch(toggleDrawer()),
  previewNavigation: () => dispatch(previewNavigation())
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
      iconElementRight={<Link to={`/preview`} onClick={()=>{props.previewNavigation()}}><IconButton iconClassName="material-icons">visibility</IconButton></Link>}
    />);
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ApplicationBar);
