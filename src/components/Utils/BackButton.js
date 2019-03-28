import React from 'react';

class BackButton extends React.Component {
  render() {
    return (
      <section className='MainTopBar'>
        <a href>
          <i className='fas fa-arrow-left fa-2x' />
        </a>
      </section>
    );
  }
}

export default BackButton;
