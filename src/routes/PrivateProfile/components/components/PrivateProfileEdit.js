import React from 'react';
import BackButton from 'components/Utils/BackButton';

class PrivateProfileEdit extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackButton />
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large'>
                Editar mi perfil
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
                  defaultValue='@eperez'
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
                  defaultValue='Eduardo'
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
                  defaultValue='P\xE9rez'
                />
              </div>
            </div>
            <br />
            <div className='field'>
              <div className='control'>
                <input
                  className='input Input--BorderBottom is-radiusless is-shadowless'
                  type='email'
                  defaultValue='edu.perez@gmail.com'
                  disabled
                />
                <a href='cambia-email.html'>
                  <i className='far fa-edit fa-lg Icon__Overlay' />
                </a>
              </div>
            </div>
            <br />
            <div className='field'>
              <div className='control'>
                <input
                  className='input Input--BorderBottom is-radiusless is-shadowless'
                  type='text'
                  placeholder='Fecha de nacimiento'
                  defaultValue='24 julio de 1982'
                />
              </div>
            </div>
            <br />
            <div className='field'>
              <div className='control'>
                <div className='select is-fullwidth'>
                  <select className='Input--BorderBottom is-radiusless is-shadowless Font--Gray'>
                    <option value disabled>
                      Select Sexo
                    </option>
                    <option value selected>
                      Masculino
                    </option>
                    <option value>With options</option>
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
                  defaultValue='C/ Casado del Alisal 7 - 6B - Madrid 28014'
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
            <div className='field has-text-centered'>
              <br />
              <button className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Medium'>
                GUARDAR CAMBIOS
              </button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PrivateProfileEdit;
