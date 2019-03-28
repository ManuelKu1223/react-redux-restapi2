import React from 'react';

class BrandDetail extends React.Component {
  render() {
    return (
      <div>
        <section className='MainTopBar'>
          <div className='columns is-mobile'>
            <div className='column is-3'>
              <a href>
                <i className='fas fa-arrow-left fa-2x' />
              </a>
            </div>
            <div className='column is-6 has-text-centered'>
              <p className='Bold__font Font--Medium'>Nike</p>
            </div>
            <div className='column is-3 has-text-right' />
          </div>
        </section>
        <section className='MainContentWrapper WithoutBottomMenu'>
          <img src='assets/image/nike-header.png' alt />
          <p className='Header__Text Regular__font Font--SemiMedium'>
            Donec accumsan accumsan mi vitae congue. Pellentesque libero dolor,
            lacinia sed feugiat at, facilisis tincidunt urna.
          </p>
          <hr />
          <p className='Font--Small Font--Gray'>
            Lorem ipsum dolor sit amet, consectetur adipiscing lit. Donec
            accumsan accumsan mi vitae congue. Pellentesque libero dolor,
            lacinia sed feugiat at, facilisis tincidunt urna. Donec accumsan
            accumsan mi vitae congue. Pellentesque libero dolor, lacinia sed
            feugiat at, facilisis tincidunt urna.
          </p>
          <hr />
          <br />
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Semibold__font Font--Medium'>Nuestros retos</p>
              <br />
              <div className='NikeDetailSlider ProfilePublishSlider'>
                <div className='MainSlider__content'>
                  <div className='card has_MarginHorizontal Button__Background--SemiRadius'>
                    <div className='card-image Position--Relative'>
                      <figure className='image is-4by3'>
                        <img
                          src='assets/image/my-chalanges.png'
                          alt='Placeholder image'
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
                  <div className='card has_MarginHorizontal Button__Background--SemiRadius'>
                    <div className='card-image Position--Relative'>
                      <figure className='image is-4by3'>
                        <img
                          src='assets/image/my-chalanges.png'
                          alt='Placeholder image'
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
                  <div className='card has_MarginHorizontal Button__Background--SemiRadius'>
                    <div className='card-image Position--Relative'>
                      <figure className='image is-4by3'>
                        <img
                          src='assets/image/my-chalanges.png'
                          alt='Placeholder image'
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
              <p className='Semibold__font Font--Medium'>Lo que nos inspira</p>
              <p className='Regular__font Font--Small Font--Gray'>
                Inspírate con antiguas campañas de la marca
              </p>
              <br />
              <div className='columns is-mobile'>
                <div className='column is-3 has-text-centered'>
                  <img src='https://via.placeholder.com/150' alt />
                </div>
                <div className='column is-3 has-text-centered'>
                  <img src='https://via.placeholder.com/150' alt />
                </div>
                <div className='column is-3 has-text-centered'>
                  <img src='https://via.placeholder.com/150' alt />
                </div>
                <div className='column is-3 has-text-centered'>
                  <img src='https://via.placeholder.com/150' alt />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BrandDetail;
