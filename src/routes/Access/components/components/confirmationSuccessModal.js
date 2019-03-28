import React from 'react';

class confirmationSuccessModal extends React.Component {
  render() {
    return (
      <div className='modal' id='confirmationGreetings'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/confirmation.png' />
            </figure>
            <br />
            <p className='Font__Helvetica Semibold__font Font--Small has-text-centered'>
              TU CUENTA ESTÁ CONFIRMADA
              <br />
              BIENVENIDO A GOVAIRAL
            </p>
            <br />
          </section>
        </div>
        <button className='modal-close closeConfirmationGreetingsModal' />
      </div>
    );
  }
}

export default confirmationSuccessModal;
