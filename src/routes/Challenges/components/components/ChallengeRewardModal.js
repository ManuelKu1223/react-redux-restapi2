import React from 'react';

class ChallengeRewardModal extends React.Component {
  render() {
    return (
      <div className='modal' id='premios'>
        <div className='modal-background' />
        <div className='modal-card'>
          <section className='modal-card-body'>
            <div className='card'>
              <div className='card-image'>
                <div className='PremiosModalSlider ProfilePublishSlider'>
                  <div className='MainSlider__content'>
                    <div className='Slider__Image openPublishModal'>
                      <img src='assets/image/nike-shoe-big.png' alt />
                    </div>
                  </div>
                  <div className='MainSlider__content'>
                    <div className='Slider__Image openPublishModal'>
                      <img src='assets/image/nike-shoe-big.png' alt />
                    </div>
                  </div>
                  <div className='MainSlider__content'>
                    <div className='Slider__Image openPublishModal'>
                      <img src='assets/image/nike-shoe-big.png' alt />
                    </div>
                  </div>
                  <div className='MainSlider__content'>
                    <div className='Slider__Image openPublishModal'>
                      <img src='assets/image/nike-shoe-big.png' alt />
                    </div>
                  </div>
                  <div className='MainSlider__content'>
                    <div className='Slider__Image openPublishModal'>
                      <img src='assets/image/nike-shoe-big.png' alt />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card-content PaddingTop__None'>
                <div className='media'>
                  <div className='media-left'>
                    <img src='assets/image/trophy.png' alt width={30} />
                    <p className='Regular__font Font--SemiMedium PaddingTop__None'>
                      Nike air max13
                    </p>
                  </div>
                  <div className='media-content has-text-right'>
                    <p className='Position--Relative'>
                      <span className='Font--SemiMedium Font--Gray'>pts.</span>
                      <br />
                      <span className='Font--Large Semibold__font Point__Overlay'>
                        50
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <button className='modal-close closePremiosModal' />
      </div>
    );
  }
}

export default ChallengeRewardModal;
