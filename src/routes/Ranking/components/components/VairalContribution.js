import React from 'react';
import VairalSlider from './VairalSlider';

class VairalContribution extends React.Component {
  render() {
    return (
      <div className='columns is-mobile is-centered'>
        <div className='column is-12'>
          <p className='Semibold__font Font--Medium'>Mobike</p>
          <p className='Regular__font Font--Small'>
            BIENVENIDO AL CENTRO DE MADRID
          </p>
          <br />
          <VairalSlider />
        </div>
      </div>
    );
  }
}

export default VairalContribution;
