import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';
import Header from './components/header';
import AppContext from './lib/app-context';
import jwtDecode from 'jwt-decode';
import NotFound from './pages/not-found';
import Auth from './pages/auth';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      user: null,
      isAuthorizing: true,
      isLoading: true
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
    const token = window.localStorage.getItem('user-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({ user, isAuthorizing: false });

  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('user-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.setItem('user-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { path } = this.state.route;
    const { user } = this.state;
    if (path === '') {
      return (
      <Home />
      );
    }
    if (path === 'sign-in' || path === 'sign-up') {
      return <Auth user={user}/>;
    }
    return <NotFound />;
  }

  render() {
    const { user, route } = this.state;
    const { handleSignIn, handleSignOut } = this;
    const contextValue = { user, route, handleSignIn, handleSignOut };
    return (
      <AppContext.Provider value={contextValue}>
      <>
      <Header user={user}/>
      {this.renderPage()}
      </>
      </AppContext.Provider>
    );
  }
}
