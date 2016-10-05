import {connect} from 'react-redux';
import ItemList from '../components/ItemList';
import * as actions from '../state/actions/actions';

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
      addItem : (item) => {
          dispatch(actions.addItem(item));
      },
      removeItem : (item) => {
          dispatch(actions.removeItem(item));
      }
  }
};

const ItemsContainer = connect(
    mapStateToProps, mapDispatchToProps
)(ItemList);

export default ItemsContainer;