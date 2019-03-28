import React from 'react';

class RequestSuccessModal extends React.Component {
  render() {
    return (
      <div className='modal' id='giftConfirmationGreetings'>
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
              tu regalo ha sido solicitado. Si no lo has recibido en 48h. por
              favor ponte en contacto con info@govairal.com
            </p>
            <br />
          </section>
        </div>
        <button className='modal-close closeGiftConfirmationGreetingsModal Button--Active' />
      </div>
    );
  }
}

export default RequestSuccessModal;
