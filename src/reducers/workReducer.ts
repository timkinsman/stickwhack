import * as type from '../actions/types';

const INITIAL_STATE = "lucky zep's";

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case type.SET_ACTIVE_WORK: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
