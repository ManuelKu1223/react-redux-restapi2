import React from 'react';

class ChallengeDetail extends React.Component {
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
            <div className='column is-3 has-text-right'>
              <i className='openUploadImageModal fas fa-upload fa-2x' />
            </div>
          </div>
        </section>
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <div className='Menu5Slider'>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openNikeShoeModal Position--Relative'>
                    <img src='assets/image/vairal-slider1.png' alt />
                    <div className='OverlaySliderDownload'>
                      <i className='fas fa-arrow-circle-down fa-2x openDownloadImageModal' />
                    </div>
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openNikeShoeModal Position--Relative'>
                    <img src='assets/image/vairal-slider2.png' alt />
                    <div className='OverlaySliderDownload'>
                      <i className='fas fa-arrow-circle-down fa-2x openDownloadImageModal' />
                    </div>
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openNikeShoeModal Position--Relative'>
                    <img src='assets/image/vairal-slider1.png' alt />
                    <div className='OverlaySliderDownload'>
                      <i className='fas fa-arrow-circle-down fa-2x openDownloadImageModal' />
                    </div>
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openNikeShoeModal Position--Relative'>
                    <img src='assets/image/vairal-slider2.png' alt />
                    <div className='OverlaySliderDownload'>
                      <i className='fas fa-arrow-circle-down fa-2x openDownloadImageModal' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large has-text-centered'>
                Siempre en movimiento
              </p>
              <hr />
              <div className='columns is-mobile PaddingBottom__None'>
                <div className='column is-8 is-offset-2 PaddingBottom__None'>
                  <div className='columns is-mobile'>
                    <div className='column is-3 has-text-centered'>
                      <p className='Font--Medium'>
                        1
                        <br />
                        <span className='Font--SemiMedium Font--Gray'>día</span>
                      </p>
                    </div>
                    <div className='column is-1 Font--Medium Bold__font'>:</div>
                    <div className='column is-4 has-text-centered'>
                      <p className='Font--Medium'>
                        2
                        <br />
                        <span className='Font--SemiMedium Font--Gray'>
                          horas
                        </span>
                      </p>
                    </div>
                    <div className='column is-1 Font--Medium Bold__font'>:</div>
                    <div className='column is-3 has-text-centered'>
                      <p className='Font--Medium'>
                        23
                        <br />
                        <span className='Font--SemiMedium Font--Gray'>min</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <p className='Font--SemiMedium'>
                Hemos lanzado las nuevas Air Max A4, unas Zapatillas para el día
                a día, versátiles, cómodas Y con las que sientes que vuelas
                como…
              </p>
              <hr />
              <div className='columns is-mobile'>
                <div className='column is-3 has-text-right'>
                  <div className='Preference_Icon_Box BG__Disable'>
                    <i className='fas fa-trophy fa-lg Preference__Icon Text__White' />
                  </div>
                </div>
                <div className='column is-3 Position--Relative PaddingLeft__None'>
                  <p className='Semibold__font Font--SemiMedium Font--Gray'>
                    Premio
                  </p>
                  <p className='Semibold__font Font--SemiMedium Ranking__Detail_Overlay'>
                    50€
                  </p>
                </div>
                <div className='column is-3 has-text-right'>
                  <div className='Preference_Icon_Box BG__Disable'>
                    <i className='fas fa-mobile-alt fa-lg Preference__Icon Text__White' />
                  </div>
                </div>
                <div className='column is-3 Position--Relative PaddingLeft__None'>
                  <p className='Semibold__font Font--SemiMedium Font--Gray PaddingBottom__None'>
                    Formato
                  </p>
                  <p className='Semibold__font Font--SemiMedium PaddingTop__None Ranking__Detail_Overlay'>
                    Story
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Semibold__font Font--Medium'>Han participado ya</p>
              <p className='Regular__font Font--Small Font--Gray'>
                Inspírate con los vairals de otros usuarios y vota los que más
                te gusten
              </p>
              <br />
              <div className='columns is-mobile'>
                <div className='column is-3 has-text-centered openViewImageModal'>
                  <img src='https://via.placeholder.com/150' alt />
                </div>
                <div className='column is-3 has-text-centered openImageLoadErrorModal'>
                  <img src='https://via.placeholder.com/150' alt />
                </div>
                <div className='column is-3 has-text-centered openViewImageModal'>
                  <img src='https://via.placeholder.com/150' alt />
                </div>
                <div className='column is-3 has-text-centered openImageLoadErrorModal'>
                  <img src='https://via.placeholder.com/150' alt />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Semibold__font Font--Medium'>Otros retos</p>
              <br />
              <div className='Menu5Slider2 ProfilePublishSlider'>
                <div className='MainSlider__content'>
                  <div className='Slider__Image Position--Relative'>
                    <img src='assets/image/vairal-slider3.png' alt />
                    <div className='OverlayBrand'>Levis</div>
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image Position--Relative'>
                    <img src='assets/image/vairal-slider4.png' alt />
                    <div className='OverlayBrand'>Addidas</div>
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image Position--Relative'>
                    <img src='assets/image/vairal-slider3.png' alt />
                    <div className='OverlayBrand'>Nike</div>
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image Position--Relative'>
                    <img src='assets/image/vairal-slider4.png' alt />
                    <div className='OverlayBrand'>U. Armour</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
        <a href className='Go__Button--Fixed'>
          <p>GO!</p>
        </a>
      </div>
    );
  }
}

export default ChallengeDetail;
