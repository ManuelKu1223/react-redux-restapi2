import React from 'react';

class ChallengesFilters extends React.Component {
  render() {
    return (
      <section className='MainTopBar'>
        <div className='columns is-mobile'>
          <div className='column is-10'>
            <div className='field'>
              <p className='control has-icons-left has-icons-right'>
                <input
                  className='input is-rounded'
                  type='text'
                  placeholder='¿Qué tipo de reto buscas?'
                />
                <span className='icon is-small is-left'>
                  <i className='fas fa-search' />
                </span>
                <span className='icon is-small is-right'>
                  <i className='fas fa-long-arrow-alt-right' />
                </span>
              </p>
            </div>
          </div>
          <div className='column is-2 has-text-centered'>
            <i className='fas fa-sliders-h fa-2x' />
          </div>
        </div>
      </section>
    );
  }
}

export default ChallengesFilters;
