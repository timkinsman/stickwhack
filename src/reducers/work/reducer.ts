import { Work, Action, ActionTypes } from '../../actions';

/* eslint-disable */
export default (state: Work | null = null, action: Action) => {
  switch (action.type) {
    case ActionTypes.setActiveWork: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
