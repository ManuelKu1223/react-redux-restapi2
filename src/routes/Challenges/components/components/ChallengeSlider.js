import React from 'react';
import Challenge from './Challenge';

class ChallengeSlider extends React.Component {
  render() {
    return (
      <div className='ChallengeSlider'>
        <Challenge />
        <Challenge />
        <Challenge />
      </div>
    );
  }
}

export default ChallengeSlider;
