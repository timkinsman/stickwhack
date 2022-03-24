import { SET_ACTIVE_WORK } from "./types";

export const setActiveWorkAction = (text: string) => (dispatch: any) => {
  dispatch({
    type: SET_ACTIVE_WORK,
    payload: text,
  });
};
