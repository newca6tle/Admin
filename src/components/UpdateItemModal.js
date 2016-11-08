import ItemModal from './ItemModal';
import { connect } from 'react-redux';
import { updateItem } from '../actions';

const mapStateToProps = ( state , { params: { itemId } }) => ({
  item: { itemId },
  state
});

const mapDispatchToProps = dispatch => ({
  updateItem: item => dispatch(updateItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
