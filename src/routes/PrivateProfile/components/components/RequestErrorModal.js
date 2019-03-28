import React from 'react';

class RequestErrorModal extends React.Component {
  render() {
    return (
      <div className='modal' id='applyForWithoutAddress'>
        <div className='modal-background' />
        <div className='modal-card Button__Background--SemiRadius'>
          <section className='modal-card-body'>
            <p className='SubHeader__Text Semibold__font Font--Medium has-text-centered Font--Gray'>
              ¿Quieres cobrar tus premio?
            </p>
            <br />
            <div className='control'>
              <label className='radio'>
                <input type='radio' name='product2' defaultChecked />
                Reto Levis Producto
              </label>
            </div>
            <div className='control'>
              <label className='radio Font--Gray'>
                <input type='radio' name='product2' />
                Reto Mobike Producto
              </label>
            </div>
            <br />
            <div className='card Button__Background--Disable'>
              <div className='card-content'>
                <p>Dir. de envío</p>
                <p className='Font--LightGray' />
              </div>
            </div>
            <br />
            <p className='Font--Gray'>
              Ahora mismo no tienes ninguna dirección de envío. Puedes
              introducirla en los ajustes de tu perfil.
            </p>
            <div className='field has-text-centered'>
              <br />
              <br />
              <button
                type='button'
                className='openApplyForModal closeApplyForWithoutAddressModal Button Button__Background--Solid Button__Background--Radius Font__SourceSansPro Font--Small'
              >
                AJUSTES
              </button>
            </div>
          </section>
        </div>
        <button className='modal-close closeApplyForWithoutAddressModal Button--Active' />
      </div>
    );
  }
}

export default RequestErrorModal;
