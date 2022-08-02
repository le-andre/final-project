import React from 'react';
import './tile.css';

class Tile extends React.Component {

  render() {
    const tile =
      [
        [{ id: 1, letter: 'A', status: 'white' }, { id: 2, letter: 'B', status: 'white' }, { id: 3, letter: 'C', status: 'white' }, { id: 4, letter: 'D', status: 'white' }, { id: 5, letter: 'E', status: 'white' }],
        [{ id: 6, letter: 'A', status: 'white' }, { id: 7, letter: 'B', status: 'white' }, { id: 8, letter: 'C', status: 'white' }, { id: 9, letter: '', status: 'white' }, { id: 10, letter: '', status: 'white' }],
        [{ id: 11, letter: 'A', status: 'white' }, { id: 12, letter: 'B', status: 'white' }, { id: 13, letter: 'C', status: 'white' }, { id: 14, letter: '', status: 'white' }, { id: 15, letter: '', status: 'white' }],
        [{ id: 16, letter: 'A', status: 'white' }, { id: 17, letter: 'B', status: 'white' }, { id: 18, letter: 'C', status: 'white' }, { id: 19, letter: '', status: 'white' }, { id: 20, letter: '', status: 'white' }],
        [{ id: 21, letter: 'A', status: 'white' }, { id: 22, letter: 'B', status: 'white' }, { id: 23, letter: 'C', status: 'white' }, { id: 24, letter: '', status: 'white' }, { id: 25, letter: '', status: 'white' }],
        [{ id: 26, letter: 'A', status: 'white' }, { id: 27, letter: 'B', status: 'white' }, { id: 28, letter: 'C', status: 'white' }, { id: 29, letter: '', status: 'white' }, { id: 30, letter: '', status: 'white' }]
      ];
    const tileList = tile.map(tiles => {
      return (
        tiles.map(tileLetter => {
          return (
            <li key={tile.id}>{tileLetter}</li>
          );
        })
      );
    });
    return (
      <ul className='tile-row'>
        {tileList}
      </ul>
    );
  }
}

export default Tile;
