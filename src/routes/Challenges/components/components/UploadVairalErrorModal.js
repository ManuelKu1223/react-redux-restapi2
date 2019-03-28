import React from 'react';

class UploadVairalErrorModal extends React.Component {
  render() {
    return (
      <div className='modal' id='errorUploadImage'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <p className='Regular__font Font--SemiMedium Font--Gray'>
              LO SENTIMOS. LA IMÁGEN QUE HAS SUBIDO NO CUMPLE ALGUNA DE LAS
              CONDICIONES PARA PODER ACEPTARLA. PUEDES VOLVER A INTERNARLO
            </p>
            <br />
            <div className='card'>
              <div className='card-image Position--Relative'>
                <figure className='image is-4by3'>
                  <img src='assets/image/upload.png' alt='Placeholder image' />
                </figure>
                <i className='fas fa-exclamation-circle fa-10x OverlayExclamation' />
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeErrorUploadImageModal Button--Active' />
      </div>
    );
  }
}

export default UploadVairalErrorModal;
