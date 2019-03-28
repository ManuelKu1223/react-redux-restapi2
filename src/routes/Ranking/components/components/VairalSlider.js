import React from 'react';
import VairalSlide from './VairalSlide';

class VairalSlider extends React.Component {
  render() {
    return (
      <div className='RankingSlider'>
        <VairalSlide />
        <div className='MainSlider__content'>
          <div className='Slider__Image'>
            <img src='assets/image/ranking_2.png' alt />
          </div>
        </div>
        <div className='MainSlider__content'>
          <div className='Slider__Image'>
            <img src='assets/image/ranking_3.png' alt />
          </div>
        </div>
        <div className='MainSlider__content'>
          <div className='Slider__Image'>
            <img src='assets/image/ranking_1.png' alt />
          </div>
        </div>
        <div className='MainSlider__content'>
          <div className='Slider__Image'>
            <img src='assets/image/ranking_2.png' alt />
          </div>
        </div>
        <div className='MainSlider__content'>
          <div className='Slider__Image'>
            <img src='assets/image/ranking_3.png' alt />
          </div>
        </div>
      </div>
    );
  }
}

export default VairalSlider;
