import React from 'react';
import BackButton from 'components/Utils/BackButton';
import VairalContribution from './VairalContribution';

class RankingDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackButton />
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large'>Ranking</p>
              <br />
              <figure className='image is-48x48 has_MarginAuto'>
                <img src='assets/image/user.png' />
              </figure>
              <p className='Font--Medium has-text-centered'>
                <span className='Font--Large'>14.</span>
  @eperez
              </p>
              <p className='Font--Small has-text-centered'>
                Builder
                <span className='Bold__font Font--Medium'>135</span>
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
                          alt
                          width={30}
                        />
                      </div>
                    </div>
                    <div className='column is-4 has-text-centered'>
                      <div className='Preference_Icon_Box BG__Olive'>
                        <img
                          className='Preference__Icon'
                          src='assets/image/meritos2.png'
                          alt
                          width={30}
                        />
                      </div>
                    </div>
                    <div className='column is-4 has-text-centered'>
                      <div className='Preference_Icon_Box BG__Blue'>
                        <img
                          className='Preference__Icon'
                          src='assets/image/meritos3.png'
                          alt
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
            <div className='column is-12 openRankingModal'>
              <p className='Semibold__font Font--Medium'>Levis</p>
              <p className='Regular__font Font--Small'>ORIGINAL RIVETED</p>
              <br />
              <figure className='image is-256x256'>
                <img src='assets/image/ranking_3.png' />
              </figure>
            </div>
          </div>
          <br />
          <VairalContribution />
        </section>
      </React.Fragment>
    );
  }
}

export default RankingDetail;
