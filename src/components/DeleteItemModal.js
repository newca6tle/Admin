import ItemModal from './ItemModal';
import { connect } from 'react-redux';
import { deleteItem } from '../actions';

const mapStateToProps = ( state , { params: { itemId } }) => ({
  item: { itemId },
  state
});

const mapDispatchToProps = dispatch => ({
  deleteItem: itemId => dispatch(deleteItem(itemId))
});

export default connect(mapStateToProps,mapDispatchToProps)(ItemModal);
