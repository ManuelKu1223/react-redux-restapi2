import React from 'react';

class DeleteVairalCancelModal extends React.Component {
  render() {
    return (
      <div className='modal' id='vairalGreetings'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <figure className='image is-32x32 has_MarginAuto'>
              <img src='assets/image/greetings-vairal.png' />
            </figure>
            <br />
            <p className='SubHeader__Text Semibold__font Font--SemiMedium has-text-centered Font--Gray'>
              GRACIAS POR QUEDARTE
            </p>
            <br />
          </section>
        </div>
        <button className='modal-close closeVairalGreetingsModal Button--Active' />
      </div>
    );
  }
}

export default DeleteVairalCancelModal;
