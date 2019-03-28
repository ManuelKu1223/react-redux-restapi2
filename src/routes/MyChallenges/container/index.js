import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MyChallengesComponents from '../components';

function mapStateToProps(state) {
  return {
    isAuthenticated: state.session.authenticated,
    literals: state.i18n.literals.mychallenges,
    user: state.session.user,
  };
}

export default withRouter(connect(mapStateToProps)(MyChallengesComponents));
