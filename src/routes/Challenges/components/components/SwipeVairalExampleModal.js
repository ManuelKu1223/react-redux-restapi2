import React from 'react';

class SwipeVairalExampleModal extends React.Component {
  render() {
    return (
      <div className='modal' id='swipeImage'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <br />
            <p className='Regular__font Font--Small has-text-centered Font--Gray'>
              Inspírate y valora otros vairals
            </p>
            <br />
            <div className='columns is-mobile is-marginless is-paddingless'>
              <div className='column is-3 has-text-centered'>
                <i className='far fa-times-circle fa-3x has-text-danger' />
              </div>
              <div className='column is-6 has-text-centered'>
                <figure className='image is-96x96 has_MarginAuto'>
                  <img src='assets/image/tinder.png' alt='Placeholder image' />
                </figure>
              </div>
              <div className='column is-3 has-text-centered '>
                <i className='far fa-check-circle fa-3x has-text-success' />
              </div>
            </div>
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
                  CERRAR
                </button>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closeSwipeImageModal' />
      </div>
    );
  }
}

export default SwipeVairalExampleModal;
