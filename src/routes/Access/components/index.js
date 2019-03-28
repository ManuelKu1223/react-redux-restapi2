import React from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

class Session extends React.Component {
  render() {
    return (
      <section className='MainContentWrapper'>
        <div className='tabs is-medium is-centered is-fullwidth'>
          <ul>
            <li data-tab={1}>
              <a href='#signup'>Regístrate</a>
            </li>
            <li className='is-active' data-tab={2}>
              <a href='#login'>Inicia sesión</a>
            </li>
          </ul>
        </div>
        <div className='tab-content'>
          <SignupForm />
          <LoginForm />
        </div>
      </section>
    );
  }
}

export default Session;
