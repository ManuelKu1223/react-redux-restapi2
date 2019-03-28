import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ChallengesFilters from './components/ChallengesFilters';
import AllChallenges from './components/AllChallenges';

import './styles.css';

/**
 * @name Challenges
 *
 *
 * @param {Object}   user
 * @param {Object}   literals
 *
 * @returns {JSX}
 */
class Challenges extends Component {
  render() {
    return (
      <div className='Challenges'>
        <ChallengesFilters />
        <AllChallenges />
      </div>
    );
  }
}

export default Challenges;
