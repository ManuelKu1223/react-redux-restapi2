import React from 'react';

class UploadVairalConfirmModal extends React.Component {
  render() {
    return (
      <div className='modal' id='confirmUpload'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <p className='Regular__font Font--SemiMedium Font--Gray'>
              Puedes revisar
              {' '}
              <a href className='Text__Colored'>
                aquí
              </a>
              {' '}
              las condiciones legales
            </p>
            <br />
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by3'>
                  <img src='assets/image/upload.png' alt='Placeholder image' />
                </figure>
              </div>
              <div className='card-content'>
                <div className='field has-text-centered'>
                  <button
                    type='button'
                    className='openErrorUploadImageModal closeConfirmUploadModal Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--SemiMedium'
                  >
                    CONFIRMAR
                  </button>
                </div>
                <br />
                <p className='Regular__font Font--Small Font--Gray'>
                  Recuerda el tipo de contenido que la marca te ha pedido que
                  subas. Si va en contra de la imagen de la marca o usas
                  imágenes dañinas no podremos aceptarlo
                </p>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeConfirmUploadModal Button--Active' />
      </div>
    );
  }
}

export default UploadVairalConfirmModal;
