import React from 'react';
import HowToPlay from '../components/how-to-play';
import AppContext from '../lib/app-context';
// import { Keyboard } from '../components/hangman-game/keyboard';
// import RandomWord from '../components/hangman-game/words';
import Hangman from '../components/hangman-game/hangman';

export default class Home extends React.Component {

  render() {
    return (
    <AppContext.Provider>
     <HowToPlay />
     <div className='app'>

      <Hangman />
     </div>
     </AppContext.Provider>
    );
  }
}
Home.contextType = AppContext;
