import React, { useState, useEffect } from 'react';
import './hangman.css';
import StopWatch from './stopwatch';

export default function Hangman() {

  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [word, setWord] = useState('');
  const [stopWatchStatus, setStopWatchStatus] = useState('');
  const [gameStatus, setGameStatus] = useState(false);
  const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : '_').join(' ');
  // eslint-disable-next-line no-console
  console.log(word);

  useEffect(() => {
    const programmingLanguages = [
      'PYTHON',
      'JAVASCRIPT',
      'MONGODB',
      'HTML',
      'CSS',
      'CSHARP',
      'GOLANG',
      'KOTLIN',
      'PHP',
      'SQL',
      'RUBY',
      'FORTRAN'
    ];
    const word = programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)];
    setWord(word);
  }, [word]);

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

  const submitScore = () => {
    return (
      <button>Submit Score</button>
    );
  };

  if (correctGuesses.length !== 0 && !maskedWord.join('') === word && gameStatus !== true) {
    setGameStatus(true);
  }

  // console.log('gameStatus:', gameStatus);
  // console.log('correctGuesses:', correctGuesses);
  // console.log('correctGuesses join:', correctGuesses.join(''));
  // console.log('word:', word);
  // console.log('maskedWordjoin:', maskedWord);
  return (
    <div className=''>
      <StopWatch setStopWatchStatus={setStopWatchStatus} setGameStatus={setGameStatus}/>
      <p id='word'>{!stopWatchStatus ? '' : maskedWord}</p>
      <p>{!gameStatus ? '' : 'You Win!' }</p>
      <p>{!gameStatus ? '' : submitScore()}</p>
      <div className='keyboard'>
        <div className='keyboard-row'>
          <Keyboard />
        </div>
      </div>

    </div>
  );
}
