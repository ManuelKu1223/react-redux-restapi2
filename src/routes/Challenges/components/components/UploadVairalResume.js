import React from 'react';

class UploadVairalResume extends React.Component {
  render() {
    return (
      <section className='MainContentWrapper WithoutTopMenu'>
        <br />
        <div className='columns is-mobile'>
          <div className='column is-2'>
            <p className='Semibold__font Font--Large Text__Colored TransformedText'>

              RETO NIKE
            </p>
          </div>
          <div className='column is-10'>
            <figure className='image is-4by3'>
              <img src='assets/image/upload.png' alt='Placeholder image' />
            </figure>
            <br />
            <p className='Semibold__font Font--Medium'>SIEMPRE EN MOVIMIENTO</p>
            <br />
            <p className='Bold__font Font--SemiMedium Font--Gray'>

              Gracias por participar
              <br />

y subir tu Vairal
            </p>
            <br />
            <p className='Semibold__font Font--Small Font--Gray'>

              Si eres premiado recibirás una notificación.
            </p>
            <br />
            <br />
            <div className='field has-text-centered'>
              <button className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--SemiMedium'>

                SUBIR OTRO VAIRAL
              </button>
            </div>
            <div className='field has-text-centered'>
              <button className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--SemiMedium'>

                VOLVER A LOS RETOS
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UploadVairalResume;
