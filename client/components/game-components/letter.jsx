import React, { useContext } from 'react';
import AppContext from '../../lib/app-context';

export default function Letter({ letterPos, attemptVal }) {
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  return <div className='letter-board'>{letter}</div>;
}

// export default function Letter(props) {
//   const { board } = useContext(AppContext);
//   const letter = board[this.state.attemptVal][this.state.letterPos];
//   return <div className='letter-board'>{letter}</div>;
// }
