import { ActionTypes } from '../../actions';
import { works } from '../../context';
import worksReducer from './reducer';

describe('Work Reducer', () => {
  it('Should return default state', () => {
    const newState = worksReducer(undefined, {});
    expect(newState).toEqual(null);
  });

  it('Should return new state if receiving type', () => {
    const work = works[0];
    const newState = worksReducer(undefined, {
      type: ActionTypes.setActiveWork,
      payload: work,
    });
    expect(newState).toEqual(work);
  });
});
