import React from 'react';

class DeleteVairalModal extends React.Component {
  render() {
    return (
      <div className='modal' id='deleteVairal'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/delete-vairal.png' />
            </figure>
            <br />
            <p className='SubHeader__Text Semibold__font Font--SemiMedium has-text-centered Font--Gray'>
              <span className='Font--Medium'>¿ESTÁS SEGURO?</span>
              <br />
              No podrás volver a subirlo, aunque la marca lo compre
            </p>
            <br />
            <div className='field has-text-centered'>
              <button
                type='button'
                className='closeDeleteVairalModal openConfirmDeleteVairalModal Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'
              >
                QUIERO QUE SE QUEDE MI VAIRAL
              </button>
            </div>
            <p className='SubHeader__Text Regular__font Font--small has-text-centered Font--Gray'>
              ESTOY SEGURO, QUIERO
              {' '}
              <a href className='Text__Colored'>
                BORRARLO
              </a>
            </p>
          </section>
        </div>
        <button className='modal-close closeDeleteVairalModal Button--Active' />
      </div>
    );
  }
}

export default DeleteVairalModal;
