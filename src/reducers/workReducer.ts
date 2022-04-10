import * as type from '../actions/types';
import { Work } from '../interfaces';

const INITIAL_STATE: Work | null = null;

/* eslint-disable */
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
