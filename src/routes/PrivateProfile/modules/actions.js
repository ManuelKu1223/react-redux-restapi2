import { sessionService } from 'redux-react-session';
import { loadingAction } from 'store/globalState/global';
import ENDPOINTS from '../../../constants/urls';
import apiFetch from '../../../utils/apiFetch';

import {
  GET_USER_INFO,
  ADD_USER_INFO,
  REMOVE_USER_INFO,
  UPDATE_USER_INFO,
  GET_USER_DATA,
  UPDATE_EMAIL,
  USER_LOGOUT,
} from './types';

export function getUserInfo(user) {
  return {
    type: GET_USER_INFO,
    user,
  };
}

export function addUserInfo() {
  return {
    type: ADD_USER_INFO,
  };
}

export function removeUserInfo() {
  return {
    type: REMOVE_USER_INFO,
  };
}

export function updateUserInfo(data) {
  return {
    type: UPDATE_USER_INFO,
    data,
  };
}

export function getUserData(data) {
  return {
    type: GET_USER_DATA,
    data,
  };
}

export function updateUserEmail(user) {
  return {
    type: UPDATE_EMAIL,
    user,
  };
}

export function logOutAction() {
  return {
    type: USER_LOGOUT,
  };
}


export function getUser() {
  return (dispatch) => {
    return apiFetch(
      'GET',
      ENDPOINTS.userSession,
    ).then((response) => {
      dispatch(getUserInfo(response));
    }).catch(() => {
    });
  };
}

export function getData() {
  return (dispatch) => {
    return apiFetch(
      'GET',
      ENDPOINTS.getUsersData,
    ).then((res) => {
      dispatch(getUserData(res));
    }).catch(() => {
    });
  };
}

export function updateUser(values) {
  return apiFetch(
    'PUT',
    ENDPOINTS.updateUser,
    values,
  );
}

export function logOut() {
  return (dispatch) => {
    dispatch(loadingAction(true));
    return apiFetch(
      'POST',
      ENDPOINTS.logout,
    ).then(() => {
      sessionService.deleteSession();
      sessionService.deleteUser();
      dispatch(logOutAction());
      dispatch(loadingAction(false));
    });
  };
}

export function updateEmail(values) {
  return (dispatch) => {
    return apiFetch(
      'POST',
      ENDPOINTS.updateEmail,
      values,
    ).then((res) => {
      dispatch(updateUserEmail(res));
    }).catch(() => {
    });
  };
}
