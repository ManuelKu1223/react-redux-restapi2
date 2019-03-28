import React from 'react';

class recoverPasswordMessageModal extends React.Component {
  render() {
    return (
      <div className='modal' id='confirmInfo'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/email.png' />
            </figure>
            <br />
            <p className='Font__Helvetica Regular__font Font--Small has-text-centered'>
              POR FAVOR CONFIRMA TU CUENTA.
              <br />
              REVISA TU BANDEJA DE ENTRADA PARA
              <br />
              CONFIRMAR TU CUENTA
            </p>
            <br />
          </section>
        </div>
        <button className='modal-close closeConfirmInfoModal' />
      </div>
    );
  }
}

export default recoverPasswordMessageModal;
