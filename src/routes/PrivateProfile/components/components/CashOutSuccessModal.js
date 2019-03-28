import React from 'react';

class CashOutSuccessModal extends React.Component {
  render() {
    return (
      <div className='modal' id='cashConfirmationGreetings'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/plane.png' />
            </figure>
            <br />
            <p className='SubHeader__Text Semibold__font Font--SemiMedium has-text-centered Font--Gray'>
              <span className='Font--Medium'>GRACIAS</span>
              <br />
              tu pago está en camino
            </p>
            <br />
          </section>
        </div>
        <button className='modal-close closeCashConfirmationGreetingsModal Button--Active' />
      </div>
    );
  }
}

export default CashOutSuccessModal;
