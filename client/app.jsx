import React from 'react';
import Home from './pages/home';
import { parseRoute } from './lib';
import Header from './components/header';
import AppContext from './lib/app-context';
import RandomWord from './components/hangman-game/words';
// import image0 from '../images/0.jpg';
// import image1 from '../images/1.jpg';
// import image2 from '../images/2.jpg';
// import image3 from '../images/3.jpg';
// import image4 from '../images/4.jpg';
// import image5 from '../images/5.jpg';
// import image6 from '../images/6.jpg';

export default class App extends React.Component {

  // static defaultProps = {
  //   maxWrong: 6,
  //   images: [image0, image1, image2, image3, image4, image5, image6]
  // };

  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      user: null,
      mistake: 0,
      guessed: new Set([]),
      answer: RandomWord

    };
  }

  componentDidMount() {

    window.addEventListener('hashchange', () => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage(props) {
    const { route } = this.state;

    if (route.path === '') {
      return (
    <AppContext.Provider value={props}>
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
