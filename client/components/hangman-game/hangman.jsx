import React, { useState } from 'react';
import './hangman.css';
import StopWatch from './stopwatch';

const programmingLanguages = [
  'PYTHON',
  'JAVASCRIPT',
  'MONGODB',
  'HTML',
  'CSS'
];

const word = programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)];

export default function Hangman() {

  const [correctGuesses, setCorrectGuesses] = useState([]);
  const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : '_').join(' ');
  // eslint-disable-next-line no-console
  console.log(word);

  const topLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const middleLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const bottomLetters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
  const LetterKeySet = ({ letters }) => {
    return letters.map((letter, index) => {
      return (
        <KeyboardKey key={letter}>{letter}</KeyboardKey>
      );
    });
  };

  const KeyboardKey = ({ size = 'small', children }) => {
    return (
      <button className='keyboard-key' data-size={size} onClick={() => {
        if (word.includes(children)) {
          setCorrectGuesses([...correctGuesses, children]);
          // console.log(children);
        }
      }}>
        {children}
      </button>
    );
  };

  const Keyboard = () => {
    return (
      <div className='keyboard'>
        <div className='keyboard-row'>
          <LetterKeySet letters={topLetters} />
        </div>
        <div className='keyboard-row'>
          <LetterKeySet letters={middleLetters} />
        </div>
        <div className='keyboard-row'>
          <LetterKeySet letters={bottomLetters} />
        </div>
      </div>
    );
  };

  return (
    <div className=''>
      <p>{maskedWord}</p>
      <div className='keyboard'>
        <div className='keyboard-row'>
          <Keyboard />

        </div>
      </div>
      <StopWatch />
    </div>
  );
}
