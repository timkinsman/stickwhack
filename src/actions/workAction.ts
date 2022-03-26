import { Work } from '../interfaces';
import { SET_ACTIVE_WORK } from './types';

export const setActiveWorkAction = (work: Work) => (dispatch: any) => {
  dispatch({
    type: SET_ACTIVE_WORK,
    payload: work,
  });
};
