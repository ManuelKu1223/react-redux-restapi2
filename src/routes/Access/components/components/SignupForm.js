import React from 'react';

class SignupForm extends React.Component {
  render() {
    return (
      <div className='content' data-content={1}>
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Header__Text Semibold__font Font--Medium'>
              Únete a la comunidad de Govairal
            </p>
          </div>
        </div>
        <div className='LoginForm'>
          <div className='field'>
            <div className='control'>
              <input
                className='input Input--BorderBottom is-radiusless is-shadowless'
                type='text'
                placeholder='Nombre de usuario'
              />
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <input
                className='input Input--BorderBottom is-radiusless is-shadowless'
                type='text'
                placeholder='Nombre'
              />
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <input
                className='input Input--BorderBottom is-radiusless is-shadowless'
                type='text'
                placeholder='Apellidos'
              />
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <input
                className='input Input--BorderBottom is-radiusless is-shadowless'
                type='email'
                placeholder='Correo electr\xF3nico'
              />
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <input
                className='input Input--BorderBottom is-radiusless is-shadowless'
                type='text'
                placeholder='Fecha de nacimiento'
              />
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <div className='select is-fullwidth'>
                <select className='Input--BorderBottom is-radiusless is-shadowless Font--Gray'>
                  <option>Sexo</option>
                  <option>Hombre</option>
                  <option>Mujer</option>
                  <option>Prefiero no decirlo</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <textarea
                className='textarea Input--BorderBottom is-radiusless is-shadowless'
                placeholder='Direcci\xF3n'
                defaultValue=''
              />
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <input
                className='input Input--BorderBottom is-radiusless is-shadowless'
                type='text'
                placeholder='Introduce tu c\xF3digo de invitaci\xF3n'
              />
            </div>
          </div>
          <br />
          <br />
          <p className='SubHeader__Text Semibold__font Font--Medium'>
            Intereses personales
          </p>
          <div className='columns is-mobile has-text-centered'>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='fas fa-globe fa-lg Preference__Icon' />
              </div>
              <p>Deporte</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='fas fa-music fa-lg Preference__Icon' />
              </div>
              <p>Música</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='fas fa-tshirt fa-lg Preference__Icon' />
              </div>
              <p>Moda</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box selected'>
                <i className='far fa-star fa-lg Preference__Icon' />
              </div>
              <p>Belleza</p>
            </div>
          </div>
          <div className='columns is-mobile has-text-centered'>
            <div className='column is-3'>
              <div className='Preference_Icon_Box selected'>
                <i className='fas fa-chart-pie fa-lg Preference__Icon' />
              </div>
              <p>Gastronomía</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='fas fa-home fa-lg Preference__Icon' />
              </div>
              <p>Hogar</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='fas fa-microphone-alt fa-lg Preference__Icon' />
              </div>
              <p>Comunicación</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='far fa-comment fa-lg Preference__Icon' />
              </div>
              <p>Ocio</p>
            </div>
          </div>
          <div className='columns is-mobile has-text-centered'>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='fas fa-mobile-alt fa-lg Preference__Icon' />
              </div>
              <p>Tecnología</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box selected'>
                <i className='fas fa-rocket fa-lg Preference__Icon' />
              </div>
              <p>Viajes</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='fas fa-cogs fa-lg Preference__Icon' />
              </div>
              <p>Motor</p>
            </div>
            <div className='column is-3'>
              <div className='Preference_Icon_Box'>
                <i className='far fa-edit Preference__Icon' />
              </div>
              <p>Formación</p>
            </div>
          </div>
          <br />
          <div className='field'>
            <div className='control'>
              <label className='checkbox Checkbox--TextAligned'>
                <input type='checkbox' />
                Acepto las condiciones legales para la conformación de este
                contrato
              </label>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <label className='checkbox Checkbox--TextAligned'>
                <input type='checkbox' />
                Acepta la
                {' '}
                <a href='#policies'>Política de privacidad</a>
              </label>
            </div>
          </div>
          <div className='field has-text-centered'>
            <br />
            <button className='Button Button__Background--Solid Button__Background--Radius Font__Helvetica Font--Medium'>
              <img alt='Registration' src='assets/image/registration.png' />
              <span className='Buttom__WithImage'>CREA TU CUENTA</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;
