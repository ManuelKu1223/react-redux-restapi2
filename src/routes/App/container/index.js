import { connect } from 'react-redux';
import AppComponents from '../components';
// import { bindActionCreators } from 'redux';

const mapStateToProps = state => ({
  literals: state.i18n.literals,
  sessionChecked: state.session.checked,
  isAuthenticated: state.session.authenticated,
  user: state.session.user,
  loading: state.global.loading,
  router: state.router,
});

/* const mapDispatchToProps = dispatch => ({

}); */

export default connect(mapStateToProps)(AppComponents);
