import React from 'react';

class DownloadImageModal extends React.Component {
  render() {
    return (
      <div className='modal' id='downloadImage'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by3'>
                  <img
                    src='assets/image/mobile-chalange.png'
                    alt='Placeholder image'
                  />
                </figure>
              </div>
            </div>
            <br />
            <p className='Regular__font Font--Medium has-text-centered Font--Gray'>
              SIEMPRE EN MOVIMIENTO
            </p>
            <br />
            <p className='Regular__font Font--Small has-text-centered Font--Gray'>
              Estas imágenes las puedes usar para inspirarte o para crear tus
              Vairals.
            </p>
            <div className='LoginForm'>
              <div className='field'>
                <div className='control has-text-centered'>
                  <label className='checkbox'>
                    <input type='checkbox' />
                    No volver a mostrar
                  </label>
                </div>
              </div>
              <div className='field has-text-centered'>
                <br />
                <button className='Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--SemiMedium'>
                  DESCARGAR IMÁGEN
                </button>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeDownloadImageModal' />
      </div>
    );
  }
}

export default DownloadImageModal;
