import React from 'react';
import BackButton from 'components/Utils/BackButton';

class Gamification extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BackButton />
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='columns is-mobile is-centered'>
            <div className='column is-12'>
              <p className='Header__Text Semibold__font Font--Large PaddingBottom__None'>
                Gamificación
              </p>
              <p className='Semibold__font Font--Medium'>Niveles</p>
              <br />
            </div>
          </div>
          <div className='columns'>
            <div className='column is-12 Position--Relative'>
              <div className='columns is-mobile'>
                <div className='column is-4 has__PaddingFive'>
                  <p className='Font--Small Text__Colored'>Builder</p>
                </div>
                <div className='column is-4 has__PaddingFive'>
                  <p className='Font--Small Text__Colored'>Master</p>
                </div>
                <div className='column is-4 has__PaddingFive'>
                  <p className='Font--Small Text__Colored'>Star</p>
                </div>
              </div>
              <div className='columns is-mobile'>
                <div className='column is-5 Button__Background--Solid has__BorderRight has__PaddingFive' />
                <div className='column is-4 Button__Background--Solid has__BorderRight has__PaddingFive' />
                <div className='column is-3 Button__Background--Solid has__PaddingFive' />
              </div>
              <div className='columns is-mobile'>
                <div className='column is-5 has__PaddingFive'>
                  <p className='Font--Small'>
                    500 pts.
                    <br />
                    de bienvenida
                  </p>
                </div>
                <div className='column is-4 has__PaddingFive'>
                  <p className='Font--Medium'>5K</p>
                </div>
                <div className='column is-3 has__PaddingFive'>
                  <p className='Font--Medium'>15K</p>
                </div>
              </div>
            </div>
          </div>
          <div className='columns'>
            <div className='column is-12 PaddingBottom__None'>
              <div className='card Button__Background--SemiRadius'>
                <div className='card-content has__MediumShadow Button__Background--SemiRadius'>
                  <div className='columns is-mobile is-centered'>
                    <div className='column is-12'>
                      <h2 className='Header__Text Regular__font Font--Large PaddingTop__None PaddingBottom__None Text__Colored'>
                        Builder
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                      </h2>
                      <p className='SubHeader__Text Regular__font Font--Small PaddingTop__None PaddingBottom__None'>
                        Participación en retos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='column is-12 PaddingBottom__None'>
              <div className='card Button__Background--SemiRadius'>
                <div className='card-content has__MediumShadow Button__Background--SemiRadius'>
                  <div className='columns is-mobile is-centered'>
                    <div className='column is-12'>
                      <h2 className='Header__Text Regular__font Font--Large PaddingTop__None PaddingBottom__None Text__Colored'>
                        Master
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                      </h2>
                      <p className='SubHeader__Text Regular__font Font--Small PaddingTop__None PaddingBottom__None'>
                        Retos exclusivos
                        <br />
                        Invitación a eventos
                        <br />
                        Participación en sorteos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='column is-12 PaddingBottom__None'>
              <div className='card Button__Background--SemiRadius'>
                <div className='card-content has__MediumShadow Button__Background--SemiRadius'>
                  <div className='columns is-mobile is-centered'>
                    <div className='column is-12'>
                      <h2 className='Header__Text Regular__font Font--Large PaddingTop__None PaddingBottom__None Text__Colored'>
                        Star
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                        <i className='far fa-star is-pulled-right Font--SemiMedium' />
                      </h2>
                      <p className='SubHeader__Text Regular__font Font--Small PaddingTop__None PaddingBottom__None'>
                        Invitación al evento anual de premios Govairal
                        <br />
                        Invitación a fiestas
                        <br />
                        Participación en el proceso creativo de las marcas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <p className='SubHeader__Text Bold__font Font--Medium'>
            Sistema de chapas
          </p>
          <hr />
          <div className='has__FullWidth'>
            <div className='columns is-mobile is-centered PaddingBottom__None has__BorderBottom has_Margin--Top5'>
              <div className='column is-2'>
                <div className='Preference_Icon_Box BG__Blue'>
                  <img
                    className='Preference__Icon'
                    src='assets/image/meritos1.png'
                    alt
                    width={30}
                  />
                </div>
              </div>
              <div className='column is-10 PaddingTop__None '>
                <h2 className='Header__Text Regular__font Font--Large PaddingTop__None PaddingBottom__None'>
                  DEPORTE
                </h2>
                <p className='SubHeader__Text Regular__font Font--Small PaddingTop__None PaddingBottom__None'>
                  Descuento del 15% en las marcas de los retos de deportes
                </p>
              </div>
            </div>
            <div className='columns is-mobile is-centered PaddingBottom__None has__BorderBottom has_Margin--Top5'>
              <div className='column is-2'>
                <div className='Preference_Icon_Box BG__Olive'>
                  <img
                    className='Preference__Icon'
                    src='assets/image/meritos2.png'
                    alt
                    width={30}
                  />
                </div>
              </div>
              <div className='column is-10 PaddingTop__None '>
                <h2 className='Header__Text Regular__font Font--Large PaddingTop__None PaddingBottom__None'>
                  FASHION VICTIM
                </h2>
                <p className='SubHeader__Text Regular__font Font--Small PaddingTop__None PaddingBottom__None'>
                  Descuento del 15% en las marcas de los retos de moda
                </p>
              </div>
            </div>
            <div className='columns is-mobile is-centered PaddingBottom__None has__BorderBottom has_Margin--Top5'>
              <div className='column is-2'>
                <div className='Preference_Icon_Box BG__Blue'>
                  <img
                    className='Preference__Icon'
                    src='assets/image/meritos3.png'
                    alt
                    width={30}
                  />
                </div>
              </div>
              <div className='column is-10 PaddingTop__None '>
                <h2 className='Header__Text Regular__font Font--Large PaddingTop__None PaddingBottom__None'>
                  EMBAJADOR
                </h2>
                <p className='SubHeader__Text Regular__font Font--Small PaddingTop__None PaddingBottom__None'>
                  Invitación a eventos
                </p>
              </div>
            </div>
            <div className='columns is-mobile is-centered PaddingBottom__None has__BorderBottom has_Margin--Top5'>
              <div className='column is-2'>
                <div className='Preference_Icon_Box BG__Yellow'>
                  <img
                    className='Preference__Icon'
                    src='assets/image/meritos5.png'
                    alt
                    width={25}
                  />
                </div>
              </div>
              <div className='column is-10 PaddingTop__None '>
                <h2 className='Header__Text Regular__font Font--Large PaddingTop__None PaddingBottom__None'>
                  VIAJES
                </h2>
                <p className='SubHeader__Text Regular__font Font--Small PaddingTop__None PaddingBottom__None'>
                  Descuento del 15% en las marcas de los retos de deportes
                </p>
              </div>
            </div>
            <div className='columns is-mobile is-centered PaddingBottom__None has__BorderBottom has_Margin--Top5'>
              <div className='column is-2'>
                <div className='Preference_Icon_Box BG__Orange'>
                  <img
                    className='Preference__Icon'
                    src='assets/image/meritos4.png'
                    alt
                    width={20}
                  />
                </div>
              </div>
              <div className='column is-10 PaddingTop__None '>
                <h2 className='Header__Text Regular__font Font--Large PaddingTop__None PaddingBottom__None'>
                  FASHION VICTIM
                </h2>
                <p className='SubHeader__Text Regular__font Font--Small PaddingTop__None PaddingBottom__None'>
                  Descuento del 15% en las marcas de los retos de moda
                </p>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Gamification;
