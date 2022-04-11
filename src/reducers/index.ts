import { combineReducers } from 'redux';
import { Work } from '../actions';
import workReducer from './work/reducer';

export interface StoreState {
  work: Work;
}

// App's top-level reducers
export default combineReducers({
  work: workReducer,
});
