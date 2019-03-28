import React from 'react';

class signupSuccessModal extends React.Component {
  render() {
    return (
      <div className='modal' id='registrationConfirmation'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/email.png' />
            </figure>
            <br />
            <p className='SubHeader__Text Semibold__font Font--Small has-text-centered'>
              REVISA TU BANDEJA DE ENTRADA
              <br />
              PARA CONFIRMAR TU CUENTA
            </p>
            <br />
          </section>
        </div>
        <button className='modal-close closeRegistrationConfirmation' />
      </div>
    );
  }
}

export default signupSuccessModal;
