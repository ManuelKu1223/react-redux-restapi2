import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import MyChallengeImage from 'assets/image/my-chalanges.png';
import MyChallengeClosedImage from 'assets/image/my-chalange-closed.png';

import './styles.css';

/**
 * @name MyChallenges
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class MyChallenges extends Component {
  render() {
    return (
      <section className='MyChallenges MainContentWrapper WithoutTopMenu'>
        <div className='columns is-mobile'>
          <div className='column is-12'>
            <p className='Header__Text Semibold__font Font--Large PaddingBottom__None'>
              Mis Retos
            </p>
            <p className='Font--SemiMedium Semibold__font' />
          </div>
        </div>
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Semibold__font Font--Medium'>
              Activos
              <span className='Regular__font Font--Small Font--Gray'>
                  Todavía puedes participar
              </span>
            </p>
            <br />
            <div className='chalangeSlider ProfilePublishSlider'>
              <div className='MainSlider__content'>
                <div className='card has_MarginHorizontal'>
                  <div className='card-image Position--Relative'>
                    <figure className='image is-4by3'>
                      <img
                        src={MyChallengeImage}
                        alt=''
                      />
                    </figure>
                    <div className='OverlayTime'>1:2:23</div>
                  </div>
                  <div className='card-content'>
                    <div className='columns is-mobile'>
                      <div className='column is-8 has__BorderRight PaddingRight__None PaddingLeft__None'>
                        <p className='Semibold__font Font--SemiMedium PaddingBottom__None'>
                          Nike
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Siempre en movimiento
                        </p>
                      </div>
                      <div className='column is-4 has-text-right'>
                        <p className='Regular__font Font--SemiMedium PaddingBottom__None'>
                          140
                          <i className='Font--Small fas fa-power-off' />
                        </p>
                        <p className='Regular__font Font--SemiMedium PaddingTop__None'>
                          50€
                          <i className='Font--Small fas fa-trophy' />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='card has_MarginHorizontal'>
                  <div className='card-image Position--Relative'>
                    <figure className='image is-4by3'>
                      <img
                        src={MyChallengeImage}
                        alt=''
                      />
                    </figure>
                    <div className='OverlayTime'>1:2:23</div>
                  </div>
                  <div className='card-content'>
                    <div className='columns is-mobile'>
                      <div className='column is-8 has__BorderRight PaddingRight__None PaddingLeft__None'>
                        <p className='Semibold__font Font--SemiMedium PaddingBottom__None'>
                          Nike
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Siempre en movimiento
                        </p>
                      </div>
                      <div className='column is-4 has-text-right'>
                        <p className='Regular__font Font--SemiMedium PaddingBottom__None'>
                          140
                          <i className='Font--Small fas fa-power-off' />
                        </p>
                        <p className='Regular__font Font--SemiMedium PaddingTop__None'>
                          50€
                          <i className='Font--Small fas fa-trophy' />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='card has_MarginHorizontal'>
                  <div className='card-image Position--Relative'>
                    <figure className='image is-4by3'>
                      <img
                        src={MyChallengeImage}
                        alt=''
                      />
                    </figure>
                    <div className='OverlayTime'>1:2:23</div>
                  </div>
                  <div className='card-content'>
                    <div className='columns is-mobile'>
                      <div className='column is-8 has__BorderRight PaddingRight__None PaddingLeft__None'>
                        <p className='Semibold__font Font--SemiMedium PaddingBottom__None'>
                          Nike
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Siempre en movimiento
                        </p>
                      </div>
                      <div className='column is-4 has-text-right'>
                        <p className='Regular__font Font--SemiMedium PaddingBottom__None'>
                          140
                          <i className='Font--Small fas fa-power-off' />
                        </p>
                        <p className='Regular__font Font--SemiMedium PaddingTop__None'>
                          50€
                          <i className='Font--Small fas fa-trophy' />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Semibold__font Font--Medium'>
              Cerrados
              <span className='Regular__font Font--Small Font--Gray'>
                  Puedes ver el Ranking y los Vairals ganadores
              </span>
            </p>
            <br />
            <div className='chalangeSlider ProfilePublishSlider'>
              <div className='MainSlider__content'>
                <div className='card has_MarginHorizontal'>
                  <div className='card-image Position--Relative'>
                    <figure className='image is-4by3'>
                      <img
                        src={MyChallengeClosedImage}
                        alt=''
                      />
                    </figure>
                    <div className='OverlayTime'>1:2:23</div>
                  </div>
                  <div className='card-content'>
                    <div className='columns is-mobile'>
                      <div className='column is-7 has__BorderRight PaddingRight__None PaddingLeft__None'>
                        <p className='Semibold__font Font--SemiMedium PaddingBottom__None'>
                          Levis
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Original Riveted
                        </p>
                      </div>
                      <div className='column is-5 has-text-right PaddingRight__None'>
                        <p className='Regular__font Font--SemiMedium PaddingBottom__None'>
                          250
                          <i className='Font--Small fas fa-power-off' />
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Producto
                          <i className='Font--Small fas fa-trophy' />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='card has_MarginHorizontal'>
                  <div className='card-image Position--Relative'>
                    <figure className='image is-4by3'>
                      <img
                        src={MyChallengeClosedImage}
                        alt=''
                      />
                    </figure>
                    <div className='OverlayTime'>1:2:23</div>
                  </div>
                  <div className='card-content'>
                    <div className='columns is-mobile'>
                      <div className='column is-7 has__BorderRight PaddingRight__None PaddingLeft__None'>
                        <p className='Semibold__font Font--SemiMedium PaddingBottom__None'>
                          Levis
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Original Riveted
                        </p>
                      </div>
                      <div className='column is-5 has-text-right PaddingRight__None'>
                        <p className='Regular__font Font--SemiMedium PaddingBottom__None'>
                          250
                          <i className='Font--Small fas fa-power-off' />
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Producto
                          <i className='Font--Small fas fa-trophy' />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='MainSlider__content'>
                <div className='card has_MarginHorizontal'>
                  <div className='card-image Position--Relative'>
                    <figure className='image is-4by3'>
                      <img
                        src={MyChallengeClosedImage}
                        alt=''
                      />
                    </figure>
                    <div className='OverlayTime'>1:2:23</div>
                  </div>
                  <div className='card-content'>
                    <div className='columns is-mobile'>
                      <div className='column is-7 has__BorderRight PaddingRight__None PaddingLeft__None'>
                        <p className='Semibold__font Font--SemiMedium PaddingBottom__None'>
                          Levis
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Original Riveted
                        </p>
                      </div>
                      <div className='column is-5 has-text-right PaddingRight__None'>
                        <p className='Regular__font Font--SemiMedium PaddingBottom__None'>
                          250
                          <i className='Font--Small fas fa-power-off' />
                        </p>
                        <p className='Regular__font Font--Small PaddingTop__None'>
                          Producto
                          <i className='Font--Small fas fa-trophy' />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MyChallenges;
