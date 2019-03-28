import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <div className='is-active content' data-content={2}>
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <br />
            <p className='Semibold__font Font--Medium'>
              Inicia sesión para continuar
            </p>
            <button className='Button Button--FullWidth Font__Helvetica Facebook__Button Font--SemiMedium has__PaddingQuarter'>
              <i className='fab fa-facebook-f' />
                  Inicia sesión con Facebook
            </button>
            <button className='Button Button--FullWidth Font__Helvetica Google__Button Font--SemiMedium has__PaddingQuarter'>
              <i className='fab fa-google' />
                  Inicia sesión con Google
            </button>
          </div>
        </div>
        <br />
        <div className='LoginForm'>
          <div className='field'>
            <div className='control'>
              <input
                className='input Input--BorderBottom is-radiusless is-shadowless'
                type='email'
                placeholder='Usuario / Correo electr\xF3nico'
              />
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <input
                className='input Input--BorderBottom is-radiusless is-shadowless'
                type='password'
                placeholder='Contrase\xF1a'
              />
            </div>
          </div>
          <div className='field has-text-centered'>
            <br />
            <button className='Button Button__Background--Solid Button__Background--Radius Font__Helvetica Font--Medium'>
              INICIA SESIÓN
            </button>
          </div>
          <br />
          <p className='Light__font Text__Colored Font--Small'>
            ¿Has olvidado tu contraseña?
          </p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
