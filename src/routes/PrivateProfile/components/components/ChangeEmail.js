import React from 'react';
import BackButton from 'components/Utils/BackButton';

class ChangeEmail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackButton />
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large'>
                Cambia tu correo electrónico
              </p>
            </div>
          </div>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <div className='LoginForm'>
                <div className='field'>
                  <div className='control'>
                    <input
                      className='input Input--BorderBottom is-radiusless is-shadowless'
                      type='email'
                      placeholder='Correo electr\xF3nico actual'
                    />
                  </div>
                </div>
                <br />
                <div className='field'>
                  <div className='control'>
                    <input
                      className='input Input--BorderBottom is-radiusless is-shadowless'
                      type='password'
                      placeholder='contrase\xF1a'
                    />
                  </div>
                </div>
                <br />
                <div className='field'>
                  <div className='control'>
                    <input
                      className='input Input--BorderBottom is-radiusless is-shadowless'
                      type='email'
                      placeholder='Nueva direcci\xF3n de correo electr\xF3nico'
                    />
                  </div>
                </div>
                <br />
                <div className='field has-text-centered'>
                  <button className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Medium'>
                    EMVIAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ChangeEmail;
