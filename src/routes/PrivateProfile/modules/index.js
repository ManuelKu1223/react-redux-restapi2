import initialState from '../../../store/globalState/initialState';
import {
  GET_USER_INFO,
  UPDATE_USER_INFO,
  GET_USER_DATA,
  UPDATE_EMAIL,
} from './types';

export default function accessReducer(state = initialState.session, action) {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, user: action.user };
    case UPDATE_USER_INFO:
      return { ...state, user: action.user };
    case UPDATE_EMAIL:
      return { ...state, user: action.user };
    case GET_USER_DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
}
