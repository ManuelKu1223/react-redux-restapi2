import React from 'react';
import BackButton from 'components/Utils/BackButton';

class Statistics extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackButton />
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large'>
                Estadísticas
              </p>
              <br />
              <figure className='image is-48x48 has_MarginAuto'>
                <img src='assets/image/user.png' />
              </figure>
              <p className='Font--Medium has-text-centered'>@eperez</p>
              <p className='Font--Small has-text-centered'>
                Builder
                <span className='Bold__font Font--Medium'>135</span>
 pts
              </p>
            </div>
          </div>
          <hr className='Button__Background--Gray' />
          <br />
          <canvas id='myChartBar' />
          <br />
          <p className='Font--SemiMedium has-text-centered'>
            <a href className='Text__Colored'>
              Semana
            </a>

            <a href className='Text__Colored'>
              Mes
            </a>

            <a href className='Text__Colored'>
              Año
            </a>
          </p>
          <br />
          <div className='card'>
            <div className='card-content has__MediumShadow'>
              <div className='columns is-mobile is-centered'>
                <div className='column is-8'>
                  <p className='Font--Medium'>Mis Triunfos</p>
                </div>
                <div className='column is-4 has-text-right'>
                  <p className='Bold__Font Font--Large'>3</p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-content has__MediumShadow'>
              <div className='columns is-mobile is-centered'>
                <div className='column is-8'>
                  <p className='Font--Medium Font--Gray'>Mi Ranking</p>
                </div>
                <div className='column is-4 has-text-right'>
                  <p className='Font--Medium'>
                    <i className='fas fa-angle-right fa-lg Font--Gray' />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card-content has__MediumShadow'>
              <div className='columns is-mobile is-centered'>
                <div className='column is-8'>
                  <p className='Font--Medium Font--Gray'>Visitas a mis Vairals</p>
                </div>
                <div className='column is-4 has-text-right'>
                  <p className='Font--Medium'>
                    <i className='fas fa-angle-right fa-lg Font--Gray' />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
        </section>
      </React.Fragment>
    );
  }
}

export default Statistics;
