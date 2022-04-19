import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export default () => {
  const middleware = [thunk, logger];
  const store = createStore(rootReducer, applyMiddleware(...middleware));
  return { store };
};
