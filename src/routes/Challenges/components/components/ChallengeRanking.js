import React from 'react';

class ChallengeRanking extends React.Component {
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
            <div className='column is-6'>
              <p className='Bold__font Font--Medium'>Ranking - Nike</p>
            </div>
            <div className='column is-3 has-text-right'>
              <i className='fas fa-upload fa-2x' />
            </div>
          </div>
        </section>
        <section className='MainContentWrapper WithTopBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large has-text-centered'>

                Siempre en movimiento
              </p>
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
              <p className='Semibold__font Font--Medium'>

                Mis Vairals ganadores
              </p>
              <p className='Regular__font Font--Small'>

                Estos Vairals son públicos.
              </p>
              <br />
              <div className='ProfilePublish1 ProfilePublishSlider'>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openNikeShoeModal'>
                    <img src='assets/image/vairal-slider1.png' alt />
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openNikeShoeModal'>
                    <img src='assets/image/vairal-slider2.png' alt />
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openNikeShoeModal'>
                    <img src='assets/image/vairal-slider1.png' alt />
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openNikeShoeModal'>
                    <img src='assets/image/vairal-slider2.png' alt />
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
                  <div className='Slider__Image openMobileChalanageModal'>
                    <img src='assets/image/vairal-slider3.png' alt />
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openMobileChalanageModal'>
                    <img src='assets/image/vairal-slider4.png' alt />
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openMobileChalanageModal'>
                    <img src='assets/image/vairal-slider3.png' alt />
                  </div>
                </div>
                <div className='MainSlider__content'>
                  <div className='Slider__Image openMobileChalanageModal'>
                    <img src='assets/image/vairal-slider4.png' alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ChallengeRanking;
