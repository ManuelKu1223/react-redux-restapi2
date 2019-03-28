import React from 'react';
import OnboardingSlide from './OnboardingSlide';

class Onboarding extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className='columns is-mobile'>
            <div className='column is-12'>
              <a className='Text__Colored is-pulled-right'>
                <i className='far fa-times-circle fa-2x' />
              </a>
            </div>
          </div>
        </section>
        <section className='MainContentWrapper WithoutBottomMenu'>
          <div className='MainSlider has-text-centered'>
            <OnboardingSlide image='assets/image/logo.png' text='Bienvenido a Govairal' />
            <OnboardingSlide image='assets/image/como1.png' text='Busca los retos de tu marcas favoritas y participa' />
            <OnboardingSlide image='assets/image/como2.png' text='Crea un vairal y súbelo ¡Puedes participar tantas veces como quieras!' />
            <OnboardingSlide image='assets/image/como3.png' text='Descubre los ganadores y consigue magníficos premios' />
          </div>
        </section>
      </div>
    );
  }
}

export default Onboarding;
