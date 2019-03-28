import React from 'react';

class VairalDetailModal extends React.Component {
  render() {
    return (
      <div className='modal' id='publish'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <div className='card'>
              <div className='card-image'>
                <figure className='image is-4by3'>
                  <img
                    src='assets/image/profile_1.png'
                    alt='Placeholder image'
                  />
                </figure>
              </div>
              <div className='card-content'>
                <div className='media'>
                  <div className='media-left'>
                    <p className='Semibold__font Font--Large PaddingBottom__None'>
                      Mobike
                    </p>
                    <p className='Regular__font Font--Small PaddingTop__None'>
                      DA LA BIENVENIDA A MOBIKE
                      <br />
                      EN EL CENTRO DE MADRID
                    </p>
                    <p className='Bold__font Font--Large has_Margin--Top10 Position--Relative'>
                      <img src='assets/image/trophy.png' alt width={40} />
                      <span className='Ranking__Overlay'>15€</span>
                    </p>
                    <p className='Regular__font Font--Small'>
                      14 de diciembre 2018
                    </p>
                  </div>
                  <div className='media-content has-text-right'>
                    <i className='fas fa-upload fa-2x' />
                    <br />
                    <br />
                    <i className='closePublishModal openDeleteVairalModal far fa-trash-alt fa-2x Text__Colored' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closePublishModal' />
      </div>
    );
  }
}

export default VairalDetailModal;
