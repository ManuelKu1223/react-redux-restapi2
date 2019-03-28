import React from 'react';

class SetPassword extends React.Component {
  render() {
    return (
      <section className='MainContentWrapper WithoutTopMenu'>
        <div className='tabs is-medium is-centered is-fullwidth'>
          <ul>
            <li className='is-active' data-tab={1}>
              <a>Crear contraseña</a>
            </li>
          </ul>
        </div>
        <div className='tab-content'>
          <div className='is-active content' data-content={1}>
            <div className='LoginForm'>
              <br />
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
              <br />
              <div className='field'>
                <div className='control'>
                  <input
                    className='input Input--BorderBottom is-radiusless is-shadowless'
                    type='password'
                    placeholder='Confirmar contrase\xF1a'
                  />
                </div>
              </div>
              <div className='field has-text-centered'>
                <br />
                <br />
                <button className='openPasswordConfirmationGreetingsModal Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Medium'>
                  CREAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SetPassword;
