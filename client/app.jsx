import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';
import Header from './components/header';
// import { boardDefault } from './components/game-components/words';
import AppContext from './lib/app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      user: null

    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;

    if (route.path === '') {
      return (
    <AppContext.Provider>
      <Home />
    </AppContext.Provider>

      );
    }
  }

  render() {
    return (
      <>

      <Header user={this.state.user}/>
      {this.renderPage()}
      </>
    );
  }
}
