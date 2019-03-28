import 'bulma/css/bulma.min.css';
import './styles/components/fontawesome-free-5.8.1-web/css/all.min.css';
import './styles/index.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { sessionService } from 'redux-react-session';
// import { ENDPOINTS } from 'constants/urls';
import { ROUTE_LOGIN } from './routes';

import initialState from './store/globalState/initialState';
// import apiFetch from './utils/apiFetch';

import configureStore from './store/configureStore';
import App from './routes/App';
import OverrideTheme from './components/OverrideTheme';
import registerServiceWorker from './serviceWorker';

// function updateSessionUser(user) {
//   const { userToken: token } = user;
//   sessionService.saveSession({ token })
//     .then(() => {
//       sessionService.saveUser(user);
//     });
// }

function validateSession() {
  return true;
  // return apiFetch(
  //   'GET',
  //   ENDPOINTS.userSession,
  // ).then((response) => {
  //   updateSessionUser(response);
  //   return true;
  // }).catch(() => {
  //   return false;
  // });
}

const sessionOptions = {
  refreshOnCheckAuth: true,
  redirectPath: ROUTE_LOGIN,
  validateSession,
};
const store = configureStore(initialState);

sessionService.initSessionService(store, sessionOptions);

render(
  <Provider store={store}>
    <OverrideTheme>
      <App />
    </OverrideTheme>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
