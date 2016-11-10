import React from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
// Material UI
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
// Styles
const style = {
  margin: 3
};

const ItemModal = React.createClass({

  getInitialState: function() {
    return {
        name: '',
        description: '',
        image: '',
        featured: false
    };
  },

  _handleNameFieldChange: function(e) {
    this.setState({
        name: e.target.value,
    })
  },

  _handleDescriptionFieldChange: function(e) {
    this.setState({
        description: e.target.value
    })
  },

  _handleImageFieldChange: function(e) {
    this.setState({
        image: e.target.value
    })
  },

  _handleFeaturedFieldChange: function(e, value) {
    this.setState({
        featured: value
    })
  },

  render(){
    let { item, state, deleteItem } = this.props;
    var index = state.resource.findIndex(c => c.id.toString() === item.itemId);
    console.log(this.state.featured);
    return (
      <div className='modal'>
      { deleteItem ?
        <div>
          <h1> Delete Item </h1>
          <TextField style={style} fullWidth={true} hintText={state.resource[index].name} disabled={true} />
          <br />
          <TextField style={style} fullWidth={true} hintText={state.resource[index].description} disabled={true} />
          <div>
            <Link to={`/content`}><RaisedButton label="YES" primary={true} onClick={this.onDelete} style={style} /></Link>
            <Link to={`/content/item/${item.itemId}`}><RaisedButton label="NO" style={style} /></Link>
          </div>
        </div> :
        <div>
          <h1> Edit Item </h1>
          <TextField style={style} fullWidth={true} value={this.state.name} onChange={this._handleNameFieldChange} floatingLabelText="Name" hintText={state.resource[index].name} />
          <br />
          <TextField style={style} fullWidth={true} value={this.state.description} onChange={this._handleDescriptionFieldChange} floatingLabelText="Description" hintText={state.resource[index].description} multiLine={true} />
          <br />
          <TextField style={style} fullWidth={true} value={this.state.image} onChange={this._handleImageFieldChange} floatingLabelText="Image" hintText="Image URL" />
          <br />
          <br />
          <Toggle style={style} label="Featured" defaultToggled={state.resource[index].featured} labelPosition="right" value={this.state.featured} onToggle={this._handleFeaturedFieldChange} />
          <br />
          <br />
          <div>
            <Link to={`/content/item/${item.itemId}`}><RaisedButton label="SAVE" primary={true} onClick={this.onSave} style={style} /></Link>
            <Link to={`/content/item/${item.itemId}`}><RaisedButton label="CANCEL" style={style} /></Link>
          </div>
        </div>
      }
      </div>
    );
  },

  onSave(evt) {
    this.props.updateItem(Object.assign({}, {
      id: this.props.item.itemId,
      name: this.state.name,
      description: this.state.description,
      image: this.state.image?this.state.image:'http://www.thebakerymadewithlove.com/wp-content/uploads/2014/08/placeholder.png',
      featured: this.state.featured
    }));
  },

  onDelete(evt) {
    this.props.deleteItem(this.props.item.itemId.toString());
  }
});

export default ItemModal;
