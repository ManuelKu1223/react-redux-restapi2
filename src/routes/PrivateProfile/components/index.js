import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTE_MYREWARDS, ROUTE_ADJUSTMENTS } from 'routes';
import { USER_HEADER_DEFAULT } from 'constants/user';

import PrivateProfileEdit from './components/PrivateProfileEdit';
import Gamification from './components/Gamification';

import './styles.css';

export const Edit = 'Edit';
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
  static propTypes = {
    data: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    fetchData: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    updateEmail: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPage: '',
    };

    this.goEdit = this.goEdit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const { data, fetchData } = this.props;

    if (typeof data.tags === 'undefined') fetchData();
  }

  goGamification = (e) => {
    e.preventDefault();
    this.setState({
      currentPage: 'Gamification',
    });
  }

  goEdit(e) {
    e.preventDefault();
    this.setState({
      currentPage: 'Edit',
    });
  }

  goBack(e) {
    e.preventDefault();
    this.setState({
      currentPage: '',
    });
  }

  render() {
    const {
      user,
      data,
      updateUser,
      updateEmail,
      logOut,
    } = this.props;

    const { currentPage } = this.state;

    const currentUser = (typeof user.id !== 'undefined') ? user : USER_HEADER_DEFAULT;

    switch (currentPage) {
      case 'Edit':
        return (
          <PrivateProfileEdit
            user={user}
            data={data}
            updateUser={updateUser}
            updateEmail={updateEmail}
            onClick={this.goBack}
          />
        );
      case 'Gamification':
        return (
          <Gamification
            onClick={this.goBack}
          />
        );
      default:
        return (
          <section className='PrivateProfile MainContentWrapper WithoutTopMenu'>
            <div className='columns is-mobile is-centered'>
              <div className='column is-12'>
                <div className='Header'>
                  <p className='Header__Text Semibold__font Font--Large'>
                    {'Mi perfil'}
                  </p>
                  <i className='material-icons' onClick={this.goEdit}>border_color</i>
                </div>
                <br />
                <figure className='image is-48x48 has_MarginAuto'>
                  <img src={currentUser.avatar.url} alt='' />
                </figure>
                <p className='Font--Medium has-text-centered'>{`${currentUser.nick}`}</p>
                <p className='Font--Small has-text-centered'>
                  {`${currentUser.level.name} `}
                  <span className='Bold__font Font--Medium'>{currentUser.level.points}</span>
                  {' pts'}
                </p>
              </div>
            </div>
            <div className='columns is-mobile is-centered'>
              <div
                className='column is-12 Position--Relative'
              >
                <br />
                <progress
                  className='progress is-danger is-small'
                  value={35}
                  max={100}
                >
                  {'35%'}
                </progress>
                <i
                  className='Rating__Marker fas fa-map-marker-alt="alt"'
                  style={{
                    left: 'calc(35% - 6px)',
                  }}
                >
                  <span>
                    {'135 pts'}
                  </span>
                </i>
              </div>
            </div>
            <p
              className='Font--Small has-text-centered Font--Gray'
              onClick={this.goGamification}
            >
              <i className='fas fa-exclamation-circle fa-lg' />
              {'1655 pts. para subir a Master'}
            </p>
            <br />
            <p className='Bold__font Font--Medium'>
              {'Mis premios'}
            </p>
            <br />
            <Link to={ROUTE_MYREWARDS}>
              <div className='card'>
                <div className='card-content has__MediumShadow PaddingBottom__None PaddingTop__None'>
                  <div className='columns is-mobile is-centered'>
                    <div className='column is-4'>
                      <p className='Font--Medium'>0€</p>
                      <p className='Font--Small'>Dinero</p>
                    </div>
                    <div className='column is-3'>
                      <p className='Font--Medium'>0</p>
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
            </Link>
            <br />
            <br />

            <div className='columns is-mobile is-centered'>
              {/* <div className='column is-4'>
                <div className='card openSendInvitationModal'>
                  <div className='card-content has__MediumShadow Button__Background--SemiRadius has-text-centered has__PaddingHorizontal Font--Gray'>
                    <i className='fas fa-user-plus fa-3x' />
                    <br />
                    <br />
                    <p>Invita a un amigo</p>
                  </div>
                </div>
              </div> */}
              {/* <div className='column is-4'>
                <div className='card'>
                  <div className='card-content has__MediumShadow Button__Background--SemiRadius has-text-centered has__PaddingHorizontal Font--Gray'>
                    <i className='fas fa-chart-line fa-3x' />
                    <br />
                    <br />
                    <p>Estadísticas</p>
                    <br />
                  </div>
                </div>
              </div> */}
              <div className='column is-4'>
                <Link to={ROUTE_ADJUSTMENTS}>
                  <div className='card'>
                    <div className='card-content has__MediumShadow Button__Background--SemiRadius has-text-centered has__PaddingHorizontal Font--Gray'>
                      <i className='fas fa-cog fa-3x' />
                      <br />
                      <br />
                      <p>Ajustes</p>
                      <br />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <br />
            <hr />
            <p
              className='Regular__font Font--SemiMedium has-text-centered Text__Colored'
              onClick={logOut}
            >
              <i className='fas fa-sign-out-alt="alt"' />
              {'Cerrar sesión'}
            </p>
            <hr />
            <br />
          </section>
        );
    }
  }
}

export default PrivateProfile;
