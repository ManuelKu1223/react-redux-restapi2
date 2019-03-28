import React from 'react';
import PropTypes from 'prop-types';

class OnboardingSlide extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  render() {
    const { text, image } = this.props;
    return (
      <div className='MainSlider__content'>
        <div className='Slider__Text'>
          <p className='SubHeader__Text Regular__font'>
            {text}
          </p>
        </div>
        <div className='Slider__Image'>
          <img src={(image)} alt='true' />
        </div>
      </div>
    );
  }
}

export default OnboardingSlide;
