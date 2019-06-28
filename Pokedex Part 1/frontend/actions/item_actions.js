import * as APIUtil from '../utils/api_util';

export const RECEIVE_ALL_ITEMS = 'RECEIVE_ALL_ITEMS';

export const receiveAllItems = items => ({
  type: RECEIVE_ALL_ITEMS,
  items
});

// export const requestAllItems = () => (dispatch) => (
//   APIUtil.fetchAllItems()
//     .then(items => dispatch(receiveAllItems(items)))
// );
