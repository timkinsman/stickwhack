import { combineReducers } from 'redux';
import workReducer from './workReducer';

// App's top-level reducers
export default combineReducers({
  work: workReducer,
});
