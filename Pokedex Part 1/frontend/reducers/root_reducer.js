import entitiesReducer from './entities';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  entities: entitiesReducer
});

export default rootReducer;