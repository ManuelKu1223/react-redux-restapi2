import React from 'react';

class DeleteVairalSuccessModal extends React.Component {
  render() {
    return (
      <div className='modal' id='confirmDeleteVairal'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/delete-vairal.png' />
            </figure>
            <br />
            <p className='SubHeader__Text Semibold__font Font--SemiMedium has-text-centered Font--Gray'>
              <span className='Font--Medium'>¡QUÉ PENA!</span>
              <br />
              la comunidad en Govairal no podrá ver tu Vairal
            </p>
            <br />
            <div className='field has-text-centered'>
              <button
                type='button'
                className='closeConfirmDeleteVairalModal openVairalGreetingsModal Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'
              >
                Confirm
              </button>
            </div>
          </section>
        </div>
        <button className='modal-close closeConfirmDeleteVairalModal Button--Active' />
      </div>
    );
  }
}

export default DeleteVairalSuccessModal;
