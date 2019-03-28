import React from 'react';

class NoMoreVairalsMessageModal extends React.Component {
  render() {
    return (
      <div className='modal' id='imageLoadError'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body has-text-centered'>
            <i className='fas fa-exclamation-circle fa-3x Text__Colored' />
            <br />
            <br />
            <p className='Regular__font Font--Small has-text-centered Font--Gray'>
              NO PUEDES VER MÁS VAIRALS
            </p>
            <br />
            <p className='Semibold__font Font--Large has-text-centered Text__Colored'>
              WAIT!
            </p>
            <br />
          </section>
        </div>
        <button className='modal-close closeImageLoadErrorModal Button--Active' />
      </div>
    );
  }
}

export default NoMoreVairalsMessageModal;
