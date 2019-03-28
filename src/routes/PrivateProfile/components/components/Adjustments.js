import React from 'react';
import BackButton from 'components/Utils/BackButton';

class Adjustments extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackButton />
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large'>Ajustes</p>
              <br />
              <figure className='image is-48x48 has_MarginAuto'>
                <img src='assets/image/user.png' />
              </figure>
              <p className='Font--Medium has-text-centered'>@eperez</p>
              <p className='Font--Small has-text-centered'>
                Builder
                <span className='Bold__font Font--Medium'>135</span>
 pts
              </p>
            </div>
          </div>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12 accordian'>
              <input type='radio' id='panel-1' name='accordion-select' />
              <input type='radio' id='panel-2' name='accordion-select' />
              <input type='radio' id='panel-3' name='accordion-select' />
              <div className='panel'>
                <label className='panel-heading' htmlFor='panel-1'>
                  <div className='columns is-mobile is-centered'>
                    <div className='column is-8'>
                      <p className='Font--SemiMedium'>Notificaciones</p>
                    </div>
                    <div className='column is-4 has-text-right'>
                      <p className='Font--Medium'>
                        <i className='fas fa-angle-right fa-lg' />
                      </p>
                    </div>
                  </div>
                </label>
                <div className='panel-block body-1'>
                  <div className='has__WidthEightyFive'>
                    <div className='columns is-mobile is-centered PaddingBottom__None'>
                      <div className='column is-7 PaddingBottom__None'>
                        <p className='Header__Text Light__font Font--SemiMedium PaddingBottom__None Font--Gray'>
                          email
                        </p>
                      </div>
                      <div className='column is-5 has-text-right PaddingBottom__None PaddingTop__None'>
                        <div className='field toggle-container'>
                          <label>
                            <input
                              type='checkbox'
                              className='Toggler ToggleSwitch ToggleSwitch--Big'
                            />
                            <div>
                              <div />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className='columns is-mobile is-centered PaddingBottom__None'>
                      <div className='column is-7 PaddingBottom__None'>
                        <p className='Header__Text Light__font Font--SemiMedium PaddingBottom__None Font--Gray'>
                          Push
                        </p>
                      </div>
                      <div className='column is-5 has-text-right PaddingBottom__None PaddingTop__None'>
                        <div className='field toggle-container'>
                          <label>
                            <input
                              type='checkbox'
                              defaultChecked
                              className='Toggler ToggleSwitch ToggleSwitch--Big'
                            />
                            <div>
                              <div />
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='panel'>
                <label className='panel-heading' htmlFor='panel-2'>
                  <div className='columns is-mobile is-centered'>
                    <div className='column is-8'>
                      <p className='Font--SemiMedium'>Cambio de contraseña</p>
                    </div>
                    <div className='column is-4 has-text-right'>
                      <p className='Font--Medium'>
                        <i className='fas fa-angle-right fa-lg' />
                      </p>
                    </div>
                  </div>
                </label>
                <div className='panel-block body-2'>
                  <ul className='has__FullWidth'>
                    <li>
                      <div className='field'>
                        <div className='control'>
                          <input
                            className='input Input--BorderBottom is-radiusless is-shadowless'
                            type='text'
                            placeholder='Introduce tu contrase\xF1a actual'
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='field'>
                        <div className='control'>
                          <input
                            className='input Input--BorderBottom is-radiusless is-shadowless'
                            type='text'
                            placeholder='Introduce tu nueva contrase\xF1a'
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className='field'>
                        <div className='control'>
                          <input
                            className='input Input--BorderBottom is-radiusless is-shadowless'
                            type='text'
                            placeholder='Confirma tu nueva contrase\xF1a'
                          />
                        </div>
                      </div>
                    </li>
                    <li className='has-text-centered'>
                      <br />
                      <button className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'>
                        CAMBIO DE CONTRASEÑA
                      </button>
                      <br />
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
              <div className='panel'>
                <label className='panel-heading' htmlFor='panel-3'>
                  <div className='columns is-mobile is-centered'>
                    <div className='column is-8'>
                      <p className='Font--SemiMedium'>Eliminar cuenta</p>
                    </div>
                    <div className='column is-4 has-text-right'>
                      <p className='Font--Medium'>
                        <i className='fas fa-angle-right fa-lg' />
                      </p>
                    </div>
                  </div>
                </label>
                <div className='panel-block body-3'>
                  <ul className='has__FullWidth'>
                    <li>
                      <p className='Header__Text Regular__font Font--Small'>
                        Para eliminar tu cuenta introduce tu contraseña
                      </p>
                      <br />
                      <div className='field'>
                        <div className='control'>
                          <input
                            className='input Input--BorderBottom is-radiusless is-shadowless'
                            type='password'
                            placeholder='Introduce tu contrase\xF1a'
                          />
                        </div>
                      </div>
                    </li>
                    <li className='has-text-centered'>
                      <br />
                      <button className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'>
                        ELIMINAR CUENTA
                      </button>
                      <br />
                      <br />
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <h2 className='Header__Text Semibold__font Font--Medium'>
                <a href>FAQs</a>
                <br />
                <a href>CONTACTO</a>
                <br />
                <a href>POLÍTICA DE PRIVACIDAD</a>
              </h2>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Adjustments;
