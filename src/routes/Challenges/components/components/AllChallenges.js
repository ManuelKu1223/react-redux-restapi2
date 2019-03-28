import React from 'react';
import ChallengeSlider from './ChallengeSlider';

class AllChallenges extends React.Component {
  render() {
    return (
      <section className='MainContentWrapper WithTopBottomMenu'>
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Semibold__font Font--Medium'>Deporte</p>
            <br />
            <ChallengeSlider />
          </div>
        </div>
        <br />
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Semibold__font Font--Medium'>Moda</p>
            <br />
            <ChallengeSlider />
          </div>
        </div>
        <br />
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Semibold__font Font--Medium'>Deporte</p>
            <br />
            <ChallengeSlider />
          </div>
        </div>
        <br />
        <div className='columns is-mobile is-centered'>
          <div className='column is-12'>
            <p className='Semibold__font Font--Medium'>Moda</p>
            <br />
            <ChallengeSlider />
          </div>
        </div>
      </section>
    );
  }
}

export default AllChallenges;
