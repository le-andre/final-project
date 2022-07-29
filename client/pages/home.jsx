import React from 'react';
import HowToPlay from '../components/how-to-play';
import AppContext from '../lib/app-context';
import { Keyboard } from '../components/game-components/keyboard';

export default class Home extends React.Component {

  render() {
    return (
    <AppContext.Provider>
     <HowToPlay />
     <div className='app'>
      <Keyboard />
     </div>
     </AppContext.Provider>
    );
  }
}
Home.contextType = AppContext;
