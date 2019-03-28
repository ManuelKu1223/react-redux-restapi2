import React from 'react';

import ChallengeImage from 'assets/image/my-chalanges.png';

class Challenge extends React.Component {
  render() {
    return (
      <div className='MainSlider__content'>
        <div className='card has_MarginHorizontal'>
          <div className='card-image Position--Relative'>
            <figure className='image is-4by3'>
              <img
                src={ChallengeImage}
                alt=''
              />
            </figure>
            <div className='OverlayTime'>1:2:23</div>
          </div>
          <div className='card-content'>
            <div className='columns is-mobile'>
              <div className='column is-8 has__BorderRight PaddingRight__None PaddingLeft__None'>
                <p className='Semibold__font Font--SemiMedium PaddingBottom__None'>
                  Nike
                </p>
                <p className='Regular__font Font--Small PaddingTop__None'>
                  Siempre en movimiento
                </p>
              </div>
              <div className='column is-4 has-text-right'>
                <p className='Regular__font Font--SemiMedium PaddingBottom__None'>
                  140
                  <i className='Font--Small fas fa-power-off' />
                </p>
                <p className='Regular__font Font--SemiMedium PaddingTop__None'>
                  50€
                  <i className='Font--Small fas fa-trophy' />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;
