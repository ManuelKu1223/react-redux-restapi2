import initialState from '../../../store/globalState/initialState';

import {
  FETCH_ACCESS_INIT,
  FETCH_ACCESS_SUCCESS,
  FETCH_ACCESS_FAILURE,
} from './types';

export default function accessReducer(state = initialState.access, action) {
  switch (action.type) {
    case FETCH_ACCESS_INIT:
    case FETCH_ACCESS_SUCCESS:
      return {
        error: '',
      };
    case FETCH_ACCESS_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
}
