import React from 'react';
import HowToPlay from '../components/how-to-play';
import GameBoard from '../components/game-components/game-board';
import VirtualKeyboard from '../components/game-components/virtual-keyboard';
// import { boardDefault } from '../components/game components/words';
import Letter from '../components/game-components/letter';
import AppContext from '../lib/app-context';

export default class Home extends React.Component {
  // const [board, setBoard] = useState(boardDefault);
  render() {
    return (
    <AppContext.Provider value={AppContext}>
      <Letter />
     <HowToPlay />
     <div className='app'>
      <GameBoard />
      <VirtualKeyboard />
     </div>
     </AppContext.Provider>
    );
  }
}
Home.contextType = AppContext;
