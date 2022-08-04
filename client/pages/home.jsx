import React from 'react';
import HowToPlay from '../components/how-to-play';
import AppContext from '../lib/app-context';
// import LoginModal from '../components/login-modal';
import Hangman from '../components/hangman-game/hangman';

export default class Home extends React.Component {

  render() {
    return (

     <div className='app'>
     <Hangman />
     <HowToPlay />
     </div>

    );
  }
}
Home.contextType = AppContext;
