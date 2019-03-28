import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Route, Redirect, Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import withWidth from '@material-ui/core/withWidth';
import { routes, ROUTE_LOGIN } from '../..';
import history from '../../../store/history';
import Loading from '../../../components/Loading';
import MainMenu from '../../../components/Menu/MainMenu';
import { browserFlagsDefault, calculateBrowserFlags } from '../../../utils/browser';

class App extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    width: PropTypes.string.isRequired,
    sessionChecked: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  state = {
    browser: browserFlagsDefault,
  };

  componentDidMount() {
    this.setBrowserFlags();
  }

  componentDidUpdate({ width: prevWidth }) {
    const {
      width,
    } = this.props;

    if (width !== prevWidth) {
      this.setBrowserFlags();
    }
  }

  /**
   * @name setBrowserFlags
   * Updates browser flags depending on the with of the user browser.
   */
  setBrowserFlags = () => {
    const { width } = this.props;

    const browser = calculateBrowserFlags(width);

    this.setState({
      browser,
    });
  }

  render() {
    const {
      user,
      sessionChecked,
      isAuthenticated,
      loading,
      // router,
    } = this.props;

    const {
      browser,
    } = this.state;

    return (
      <React.Fragment>
        <Loading hide={!loading} />

        <ConnectedRouter history={history}>
          <div className='container-fluid'>
            <Switch>
              {sessionChecked && routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={({ match }) => ((route.ignoreSession || isAuthenticated || 1) ? (
                    <section>
                      <route.component route={history} browser={browser} match={match} />
                      { route.footer && <MainMenu match={match} user={user} /> }
                    </section>
                  ) : (
                    <Redirect to={{
                      pathname: ROUTE_LOGIN,
                      state: { from: window.location.pathname },
                    }}
                    />
                  ))}
                />
              ))}
            </Switch>
          </div>
        </ConnectedRouter>
      </React.Fragment>
    );
  }
}

export default withWidth()(App);
