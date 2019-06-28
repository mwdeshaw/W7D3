import { RECEIVE_ALL_ITEMS } from '../actions/item_actions';

const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ITEMS:
      const newState = Object.assign({}, action.items);
      return newState;
    default:
      return state;
  }
}

export default itemsReducer;