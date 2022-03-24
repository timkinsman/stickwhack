import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default () => {
  const middleware = [thunk];
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return { store };
};
