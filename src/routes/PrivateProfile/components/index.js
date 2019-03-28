import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserImage from 'assets/image/user.png';
// import MeritosImg1 from 'assets/image/meritos1.png';
// import MeritosImg2 from 'assets/image/meritos2.png';
// import MeritosImg3 from 'assets/image/meritos3.png';
// import MeritosImg4 from 'assets/image/meritos4.png';
// import MeritosImg5 from 'assets/image/meritos5.png';
// import MeritosImg6 from 'assets/image/meritos6.png';
// import MeritosImg7 from 'assets/image/meritos7.png';
// import MeritosImg8 from 'assets/image/meritos8.png';
import {
  ROUTE_PRIVATE_PROFILE_EDIT,
} from 'routes';
import './styles.css';

/**
 * @name PrivateProfile
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */

class PrivateProfile extends Component {
  render() {
    return (
      <section className='PrivateProfile MainContentWrapper WithoutTopMenu'>
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <div class="Header">
              <p className='Header__Text Semibold__font Font--Large'>Mi perfil</p>
              <Link to={ROUTE_PRIVATE_PROFILE_EDIT}>
                <i className="material-icons">border_color</i>
              </Link>
            </div>
            <br />
            <figure className='image is-48x48 has_MarginAuto'>
              <img
                src={UserImage}
                alt=''
              />
            </figure>
            <p className='Font--Medium has-text-centered'>@eperez</p>
            <p className='Font--Small has-text-centered'>
              Builder
              <span className='Bold__font Font--Medium'>135</span>
               pts
            </p>
          </div>
        </div>
        <div className='columns is-mobile is-centered'>
          <div className='column is-12 Position--Relative'>
            <br />
            <progress
              className='progress is-danger is-small'
              value={35}
              max={100}
            >


              35%
            </progress>
            <i
              className='Rating__Marker fas fa-map-marker-alt="alt"'
              style={{
                left: 'calc(35% - 6px)',
              }}
            >
              <span>135 pts</span>
            </i>
          </div>
        </div>
        <p className='Font--Small has-text-centered Font--Gray'>
          <i className='fas fa-exclamation-circle fa-lg' />


            1655 pts. para subir a Master
        </p>
        <br />
        <p className='Bold__font Font--Medium'>Mis premios</p>
        <br />
        <div className='card'>
          <div className='card-content has__MediumShadow PaddingBottom__None PaddingTop__None'>
            <div className='columns is-mobile is-centered'>
              <div className='column is-4'>
                <p className='Font--Medium'>50€</p>
                <p className='Font--Small'>Dinero</p>
              </div>
              <div className='column is-3'>
                <p className='Font--Medium'>1</p>
                <p className='Font--Small'>Productos</p>
              </div>
              <div className='column is-3'>
                <p className='Font--Medium'>0</p>
                <p className='Font--Small'>Códigos</p>
              </div>
              <div className='column is-2'>
                <i className='fas fa-chevron-right fa-2x has_Margin--Top10' />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* <p className='SubHeader__Text Semibold__font Font--Medium'>


          Mis méritos
        </p>
        <div className='columns is-mobile has-text-centered'>
          <div className='column is-3'>
            <div className='Preference_Icon_Box Big__Box BG__Blue'>
              <img
                className='Preference__Icon'
                src={MeritosImg1}
                alt='alt'
              />
            </div>
            <p>Deportista</p>
          </div>
          <div className='column is-3'>
            <div className='Preference_Icon_Box Big__Box BG__Olive'>
              <img
                className='Preference__Icon'
                src={MeritosImg2}
                alt='alt'
              />
            </div>
            <p>Fashion Victim</p>
          </div>
          <div className='column is-3'>
            <div className='Preference_Icon_Box Big__Box BG__Blue'>
              <img
                className='Preference__Icon'
                src={MeritosImg3}
                alt='alt'
              />
            </div>
            <p>Embajador</p>
          </div>
          <div className='column is-3'>
            <div className='Preference_Icon_Box Big__Box BG__Orange'>
              <img
                className='Preference__Icon'
                src={MeritosImg4}
                alt='alt'
              />
            </div>
            <p>Machaca</p>
          </div>
        </div>
        <div className='columns is-mobile has-text-centered'>
          <div className='column is-3'>
            <div className='Preference_Icon_Box Big__Box BG__Yellow'>
              <img
                className='Preference__Icon'
                src={MeritosImg5}
                alt='alt'
              />
            </div>
            <p>Machaca</p>
          </div>
          <div className='column is-3'>
            <div className='Preference_Icon_Box Big__Box disabled'>
              <img
                className='Preference__Icon'
                src={MeritosImg6}
                alt='alt'
              />
            </div>
            <p>Machaca</p>
          </div>
          <div className='column is-3'>
            <div className='Preference_Icon_Box Big__Box disabled'>
              <img
                className='Preference__Icon'
                src={MeritosImg7}
                alt='alt'
              />
            </div>
            <p>Machaca</p>
          </div>
          <div className='column is-3'>
            <div className='Preference_Icon_Box Big__Box disabled'>
              <img
                className='Preference__Icon'
                src={MeritosImg8}
                alt='alt'
              />
            </div>
            <p>Machaca</p>
          </div>
        </div>
        <br /> */}
        <div className='columns is-mobile is-centered'>
          <div className='column is-4'>
            <div className='card openSendInvitationModal'>
              <div className='card-content has__MediumShadow Button__Background--SemiRadius has-text-centered has__PaddingHorizontal Font--Gray'>
                <i className='fas fa-user-plus fa-3x' />
                <br />
                <br />
                <p>Invita a un amigo</p>
              </div>
            </div>
          </div>
          <div className='column is-4'>
            <div className='card'>
              <div className='card-content has__MediumShadow Button__Background--SemiRadius has-text-centered has__PaddingHorizontal Font--Gray'>
                <i className='fas fa-chart-line fa-3x' />
                <br />
                <br />
                <p>Estadísticas</p>
                <br />
              </div>
            </div>
          </div>
          <div className='column is-4'>
            <div className='card'>
              <div className='card-content has__MediumShadow Button__Background--SemiRadius has-text-centered has__PaddingHorizontal Font--Gray'>
                <i className='fas fa-cog fa-3x' />
                <br />
                <br />
                <p>Ajustes</p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <p className='Regular__font Font--SemiMedium has-text-centered Text__Colored'>
          <i className='fas fa-sign-out-alt="alt"' />


            Cerrar sesión
        </p>
        <hr />
        <br />
      </section>
    );
  }
}

export default PrivateProfile;
