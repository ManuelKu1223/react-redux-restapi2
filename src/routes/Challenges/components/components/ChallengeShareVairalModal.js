import React from 'react';

class ChallengeShareVairalModal extends React.Component {
  render() {
    return (
      <div className='modal' id='mobileChalanage'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by3'>
                  <img
                    src='assets/image/mobile-chalange.png'
                    alt='Placeholder image'
                  />
                </figure>
              </div>
              <div className='card-content'>
                <p className='SubHeader__Text Semibold__font Font--SemiMedium has-text-centered Font--Gray'>
                  <span className='Font--Medium'>SIEMPRE EN MOVIMIENTO</span>
                </p>
                <p className='SubHeader__Text Regular__font Font--small has-text-centered Font--Gray'>

                  Estoy participando en este reto de Mobile en la App de
                  Govairal. ¿Quieres ganar premios y dinero?
                  <br />
                  <br />
                  <br />

                  Bájate la App de Govairal
                </p>
                <br />
                <div className='field has-text-centered'>
                  <a href='mis-retos.html'>
                    <button
                      type='button'
                      className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--SemiMedium'
                    >

                      ENVIAR INVITACIÓN
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeMobileChalanageModal' />
      </div>
    );
  }
}

export default ChallengeShareVairalModal;
