import { sessionService } from 'redux-react-session';
// import apiFetch from '../../../utils/apiFetch';
import {
  loadingAction,
} from '../../../store/globalState/global';

import {
  FETCH_ACCESS_INIT,
  FETCH_ACCESS_SUCCESS,
  FETCH_ACCESS_FAILURE,
} from './types';

export function fetchAccessInit() {
  return {
    type: FETCH_ACCESS_INIT,
  };
}

export function fetchAccessSuccess() {
  return {
    type: FETCH_ACCESS_SUCCESS,
  };
}

export function fetchAccessFailure(error) {
  return {
    type: FETCH_ACCESS_FAILURE,
    payload: error,
  };
}

export default function fetchAccessAction(event, { email }) {
  event.preventDefault();

  /* const loginForm = {
    email,
    password,
  }; */

  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(fetchAccessInit());

    return new Promise((resolve) => {
      sessionService.saveSession({ token: '123456789' })
        .then(() => {
          sessionService.saveUser({
            email,
          }).then(() => {
            dispatch(fetchAccessSuccess());
            dispatch(loadingAction(false));
            resolve(true);
          });
        });
    });
    /* return apiFetch(
        'POST',
        {endPoint:'login'},
        loginForm
      )
      .then((res) => {

        if (typeof res === 'string') {
          dispatch(fetchAccessFailure('error'));
          dispatch(loadingAction(false));
          return;
        }

        const { success } = res;

        if (success) {
          const { info : { session_code: token } } = res;

          sessionService.saveSession({ token })
            .then(() => {
              sessionService.saveUser(res.info)
                .then(() => {
                  dispatch(fetchAccessSuccess());
                  dispatch(loadingAction(false));
                })
            })
        } else {
          dispatch(fetchAccessFailure(res.info));
          dispatch(loadingAction(false));
        }
      })
      .catch((err) => {
        dispatch(fetchAccessFailure(err));
        dispatch(loadingAction(false));
      }); */
  };
}
