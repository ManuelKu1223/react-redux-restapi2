import React from 'react';
import BackButton from 'components/Utils/BackButton';

class MyRewards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackButton />
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large'>
                Mis premios
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
          <div className='card'>
            <div className='card-content has__MediumShadow'>
              <div className='columns is-mobile is-centered'>
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
          <br />
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium'>Reto Swatch</p>
            </div>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium'>15€</p>
            </div>
            <div className='column has-text-right is-4'>
              <p className='is-pulled-right'>
                <button className='openCashOutModal Button--Alternate Font__SourceSansPro Regular__font Button__Background--Radius Button__Small Button--Active'>
                  CASHOUT
                </button>
              </p>
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium'>Reto Nike</p>
            </div>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium'>30€</p>
            </div>
            <div className='column has-text-right is-4'>
              <p className='is-pulled-right'>
                <button className='openCashOutModal Button--Alternate Font__SourceSansPro Regular__font Button__Background--Radius Button__Small Button--Active'>
                  CASHOUT
                </button>
              </p>
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium'>Reto Levis</p>
            </div>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium'>Regalo</p>
            </div>
            <div className='column has-text-right is-4'>
              <p className='is-pulled-right'>
                <button className='openApplyForWithoutAddressModal Button--Alternate Font__SourceSansPro Regular__font Button__Background--Radius Button__Small Button--Active'>
                  SOLICITAR
                </button>
              </p>
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium'>Reto Mobike</p>
            </div>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium'>BICIMADD</p>
            </div>
            <div className='column has-text-right is-4'>
              <p className='is-pulled-right'>
                <button className='openCashOutModal Button--Alternate Font__SourceSansPro Regular__font Button__Background--Radius Button__Small Button--Active'>
                  CASHOUT
                </button>
              </p>
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium Font--Gray'>
                Reto Mobike
              </p>
            </div>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium Font--Gray'>
                BICIMADD
              </p>
            </div>
            <div className='column has-text-right is-4'>
              <p className='is-pulled-right'>
                <button
                  disabled
                  className='Button--Alternate Font__SourceSansPro Regular__font Button__Background--Radius Button__Small Button--Inactive'
                >
                  CASHOUT
                </button>
              </p>
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium Font--Gray'>
                Reto Nike
              </p>
            </div>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium Font--Gray'>5€</p>
            </div>
            <div className='column has-text-right is-4'>
              <p className='is-pulled-right'>
                <button
                  disabled
                  className='Button--Alternate Font__SourceSansPro Regular__font Button__Background--Radius Button__Small Button--Inactive'
                >
                  CASHOUT
                </button>
              </p>
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium Font--Gray'>
                Reto Mobike
              </p>
            </div>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium Font--Gray'>
                BICIMADD
              </p>
            </div>
            <div className='column has-text-right is-4'>
              <p className='is-pulled-right'>
                <button
                  disabled
                  className='Button--Alternate Font__SourceSansPro Regular__font Button__Background--Radius Button__Small Button--Inactive'
                >
                  ACTIVADO
                </button>
              </p>
            </div>
          </div>
          <div className='columns is-mobile'>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium Font--Gray'>
                Reto Nike
              </p>
            </div>
            <div className='column is-4'>
              <p className='Regular__font Font--SemiMedium Font--Gray'>5€</p>
            </div>
            <div className='column has-text-right is-4'>
              <p className='is-pulled-right'>
                <button
                  disabled
                  className='Button--Alternate Font__SourceSansPro Regular__font Button__Background--Radius Button__Small Button--Inactive'
                >
                  CASHOUT
                </button>
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default MyRewards;
