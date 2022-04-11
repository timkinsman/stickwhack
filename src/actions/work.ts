import { Dispatch } from 'redux';
import PropTypes from 'prop-types';
import { ActionTypes } from './types';

export const workPropsTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  feature: PropTypes.string.isRequired,
  subFeatures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  carouselImages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
});

export interface Work {
  id: number;
  logo: string;
  feature: string;
  subFeatures: string[];
  carouselImages: string[];
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string[];
  theme: {
    primary: string;
    secondary: string;
    color: string;
  };
}

export enum Works {
  brandingAndApparel,
  fringe,
  brandingAndStationery,
  illustrationAndMerchDesign,
}

export interface SetActiveWorkAction {
  type: ActionTypes.setActiveWork;
  payload: Work;
}

export const setActiveWork = (work: Work) => {
  return async (dispatch: Dispatch) => {
    dispatch<SetActiveWorkAction>({
      type: ActionTypes.setActiveWork,
      payload: work,
    });
  };
};
