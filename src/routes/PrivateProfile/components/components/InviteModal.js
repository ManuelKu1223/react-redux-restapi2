import React from 'react';

class InviteModal extends React.Component {
  render() {
    return (
      <div className='modal' id='sendInvitation'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/user-icon.png' />
            </figure>
            <br />
            <p className='Regular__font Font--SemiMedium has-text-centered Font--Gray'>
              <span className='Font--Medium'>COMUNIDAD</span>
              <br />
              Invita a un amigo a participar en Govairaly gana puntos
            </p>
            <br />
            <div className='LoginForm'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input Input--BorderBottom is-radiusless is-shadowless'
                    type='email'
                    placeholder='Introduce el email'
                  />
                </div>
              </div>
              <div className='field has-text-centered'>
                <br />
                <button className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'>
                  ENVIAR INVITACIÓN
                </button>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeSendInvitationModal Button--Active' />
      </div>
    );
  }
}

export default InviteModal;
