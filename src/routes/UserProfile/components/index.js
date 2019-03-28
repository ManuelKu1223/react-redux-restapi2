import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './styles.css';

/**
 * @name UserProfile
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class UserProfile extends Component {
  render() {
    return (
      <section className='UserProfile MainContentWrapper WithoutBottomMenu'>
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Header__Text Semibold__font Font--Large'>


              Mi perfil público
            </p>
            <br />
            <figure className='image is-48x48 has_MarginAuto'>
              <img
                src='assets/image/user.png'
                alt=''
              />
            </figure>
            <p className='Font--Medium has-text-centered'>@eperez</p>
            <p className='Font--Small has-text-centered'>


              Builder
              <span className='Bold__font Font--Medium'>135</span>
              {' '}

pts
            </p>
          </div>
        </div>
        <div className='card'>
          <div className='card-content has__MediumShadow'>
            <div className='columns is-mobile'>
              <div className='column is-8 is-offset-2'>
                <div className='columns is-mobile'>
                  <div className='column is-4 has-text-centered'>
                    <div className='Preference_Icon_Box BG__Blue'>
                      <img
                        className='Preference__Icon'
                        src='assets/image/meritos1.png'
                        alt='alt'
                        width={30}
                      />
                    </div>
                  </div>
                  <div className='column is-4 has-text-centered'>
                    <div className='Preference_Icon_Box BG__Olive'>
                      <img
                        className='Preference__Icon'
                        src='assets/image/meritos2.png'
                        alt='alt'
                        width={30}
                      />
                    </div>
                  </div>
                  <div className='column is-4 has-text-centered'>
                    <div className='Preference_Icon_Box BG__Blue'>
                      <img
                        className='Preference__Icon'
                        src='assets/image/meritos3.png'
                        alt='alt'
                        width={30}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='columns is-mobile'>
              <div className='column is-4'>
                <p className='Font--Medium'>50€</p>
                <p className='Font--Small'>Dinero</p>
              </div>
              <div className='column is-4'>
                <p className='Font--Medium'>1</p>
                <p className='Font--Small'>Productos</p>
              </div>
              <div className='column is-4'>
                <p className='Font--Medium'>0</p>
                <p className='Font--Small'>Códigos</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Semibold__font Font--Medium'>Mis Vairals ganadores</p>
            <p className='Regular__font Font--Small'>


              Estos Vairals son públicos.
            </p>
            <br />
            <div className='ProfilePublish1 ProfilePublishSlider'>
              <div className='MainSlider__content'>
                <div className='Slider__Image openPublishModal'>
                  <img src='assets/image/profile_1.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image openPublishModal'>
                  <img src='assets/image/profile_2.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image openPublishModal'>
                  <img src='assets/image/profile_1.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image openPublishModal'>
                  <img src='assets/image/profile_2.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image openPublishModal'>
                  <img src='assets/image/profile_1.png' alt='alt' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Semibold__font Font--Medium'>Todos mis Vairals</p>
            <p className='Regular__font Font--Small'>


              Estos Vairals no son públicos y no serán visibles en tu perfil
              público
            </p>
            <br />
            <div className='ProfilePublish2 ProfilePublishSlider'>
              <div className='MainSlider__content'>
                <div className='Slider__Image'>
                  <img src='assets/image/ranking_1.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image'>
                  <img src='assets/image/ranking_2.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image'>
                  <img src='assets/image/ranking_3.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image'>
                  <img src='assets/image/ranking_1.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image'>
                  <img src='assets/image/ranking_2.png' alt='alt' />
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='Slider__Image'>
                  <img src='assets/image/ranking_3.png' alt='alt' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserProfile;
