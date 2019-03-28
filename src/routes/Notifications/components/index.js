import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Notification from './components/Notification';

import './styles.css';

/**
 * @name Notifications
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */

class Notifications extends Component {
  render() {
    return (
      <section className='Notifications MainContentWrapper WithoutTopMenu'>
        <div className='columns is-mobile'>
          <div className='column is-12'>
            <p className='Header__Text Semibold__font Font--Large PaddingBottom__None'>
              Notificaciones
            </p>
            <p className='Font--SemiMedium Semibold__font'>Hoy</p>
          </div>
        </div>
        <hr />
        <p className='Semibold__font Font--SemiMedium'>Clasificación general</p>
        <br />
        <Notification />
        <Notification />
        <Notification />
        <br />
        <p className='Semibold__font Font--SemiMedium'>Esta semana</p>
        <hr />
        <br />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </section>
    );
  }
}

export default Notifications;
