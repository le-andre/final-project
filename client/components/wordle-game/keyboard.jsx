import React from 'react';
import { KeyboardKey, EnterKey, BackspaceKey } from './keyboardKey';
import './keyboard.css';

export const topLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
export const middleLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
export const bottomLetters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
export const LetterKeySet = ({ letters }) => {
  return letters.map((letter, index) => {
    return (
    <KeyboardKey key ={letter}>{letter}</KeyboardKey>
    );
  });
};

export const Keyboard = () => {
  return (
    <div className='keyboard'>
      <div className='keyboard-row'>
        <LetterKeySet letters={topLetters}/>
      </div>
      <div className='keyboard-row'>
        <LetterKeySet letters={middleLetters} />
      </div>
      <div className='keyboard-row'>
        <LetterKeySet letters={bottomLetters} />
      </div>
      <div className='keyboard-row'>
        <EnterKey />
        <BackspaceKey />
      </div>
    </div>
  );
};
