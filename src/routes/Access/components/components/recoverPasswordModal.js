import React from 'react';

class recoverPasswordModal extends React.Component {
  render() {
    return (
      <div className='modal' id='forgetPassword'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <p className='Header__Text Semibold__font Font--Large'>
              ¿Has olvidado tu contraseña?
            </p>
            <div className='LoginForm'>
              <div className='field'>
                <div className='control'>
                  <input
                    className='input Input--BorderBottom is-radiusless is-shadowless'
                    type='email'
                    placeholder='Direcci\xF3n de correo electr\xF3nico'
                  />
                </div>
              </div>
              <div className='field has-text-centered'>
                <br />
                <button className='Button Button__Background--Solid Button__Background--Radius Font__Helvetica Font--Small'>
                  ENVIAR CORREO ELECTRÓNICO
                </button>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeForgetPasswordModal' />
      </div>
    );
  }
}

export default recoverPasswordModal;
