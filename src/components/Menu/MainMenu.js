import React from 'react';
import { Link } from 'react-router-dom';
import {
  ROUTE_MAIN_PAGE,
  ROUTE_MYCHALLENGE,
  ROUTE_PRIVATE_PROFILE,
  ROUTE_RANKING,
  ROUTE_NOTIFICATION,
} from 'routes';

import MenuLogo from 'assets/image/menu.png';

class MainMenu extends React.Component {
  render() {
    return (
      <section className='MainMenu'>
        <div className='columns is-mobile is-centered'>
          <div className='column has-text-centered is-menu'>
            <Link to={ROUTE_RANKING}>
              <i className='fas fa-chart-bar' />
              <p className='Font--Menu'>


                  RANKING
              </p>
            </Link>
          </div>
          <div className='column has-text-centered is-menu'>
            <Link to={ROUTE_MYCHALLENGE}>
              <i className='far fa-edit' />
              <p className='Font--Menu' style={{ minWidth: '80px' }}>


                MIS RETOS
              </p>
            </Link>
          </div>
          <div className='column has-text-centered is-menu active'>
            <Link to={ROUTE_MAIN_PAGE}>
              <figure className='image is-24x24 has_MarginAuto'>
                <img
                  src={MenuLogo}
                  alt=''
                />
              </figure>
            </Link>
          </div>
          <div className='column has-text-centered is-menu'>
            <Link to={ROUTE_NOTIFICATION}>
              <i className='far fa-bell' />
              <p className='Font--Menu'>


                NOTIFICACIONES
              </p>
            </Link>
          </div>
          <div className='column has-text-centered is-menu'>
            <Link to={ROUTE_PRIVATE_PROFILE}>
              <i className='far fa-user' />
              <p className='Font--Menu'>


                PERFIL
              </p>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default MainMenu;
