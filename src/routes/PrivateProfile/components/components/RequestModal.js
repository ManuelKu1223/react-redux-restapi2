import React from 'react';

class RequestModal extends React.Component {
  render() {
    return (
      <div className='modal' id='applyFor'>
        <div className='modal-background' />
        <div className='modal-card Button__Background--SemiRadius'>
          <section className='modal-card-body'>
            <p className='SubHeader__Text Semibold__font Font--Medium has-text-centered Font--Gray'>
              ¿Quieres cobrar tus premio?
            </p>
            <br />
            <div className='control'>
              <label className='radio'>
                <input type='radio' name='product' defaultChecked />
                Reto Levis Producto
              </label>
            </div>
            <div className='control'>
              <label className='radio Font--Gray'>
                <input type='radio' name='product' />
                Reto Mobike Producto
              </label>
            </div>
            <br />
            <div className='card Button__Background--Disable'>
              <div className='card-content'>
                <p>Dir. de envío</p>
                <p className='Font--LightGray'>
                  C/Casado del alísalo 7 - 6B / 28014 - Madrid
                </p>
              </div>
            </div>
            <br />
            <p className='Font--Gray'>
              Si quieres recibir el regalo en otra dirección puedes cambiarla en
              tu perfil.
            </p>
            <div className='field has-text-centered'>
              <br />
              <br />
              <button
                type='button'
                className='openGiftConfirmationGreetingsModal closeApplyForModal Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'
              >
                SOLICITAR
              </button>
            </div>
          </section>
        </div>
        <button className='modal-close closeApplyForModal Button--Active' />
      </div>
    );
  }
}

export default RequestModal;
