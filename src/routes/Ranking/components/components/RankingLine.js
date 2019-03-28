import React from 'react';
import UserImage from 'assets/image/user.png';

class RankingLine extends React.Component {
  render() {
    return (
      <div className='columns is-mobile'>
        <div className='column is-2'>
          <i className='fas fa-caret-up Increasing' />
 1
        </div>
        <div className='column is-2'>
          <img
            className='has_MarginAuto'
            src={UserImage}
            width={30}
            alt=''
          />
        </div>
        <div className='column is-5'>@eperez</div>
        <div className='column is-1 has-text-centered'>
          <i className='Font--Small Star--Olive fas fa-star' />
        </div>
        <div className='column is-2 has-text-right PaddingTop__None'>
          <p className='Font--Small Position--Relative'>
            pts.
            <br />
            <span className='Font--SemiMedium Semibold__font Point__Overlay'>
              750
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default RankingLine;
