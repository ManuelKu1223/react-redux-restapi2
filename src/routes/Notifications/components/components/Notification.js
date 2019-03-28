import React from 'react';
import NikeLogo from 'assets/image/notification-nike-logo.png';

class Notification extends React.Component {
  render() {
    return (
      <div className='columns is-mobile'>
        <div className='column is-3 PaddingTop__None PaddingBottom__None'>
          <img
            className='has_MarginAuto'
            src={NikeLogo}
            width={60}
            alt=''
          />
        </div>
        <div className='column is-9 PaddingLeft__None  PaddingTop__None PaddingBottom__None'>
          <p className='Font--SemiMedium Regular__font Font--Gray has_Margin--Top10'>
            Quedan 18 horas para que se acabe la campaña de Nike. Esperamos tu
            creatividad
          </p>
        </div>
      </div>
    );
  }
}

export default Notification;
