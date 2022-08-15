import React from 'react';
import './keyboard.css';

export const PENDING_STATE = 'pending';
export const INCORRECT_STATE = 'incorrect';
export const PARTIALLY_STATE = 'partially';
export const CORRECT_STATE = 'correct';

export const KeyboardKey = ({ state = 'pending', size = 'small', children }) => {
  return (
  <button className='keyboard-key' data-state={state} data-size={size} onClick={() => {
    // console.log('firing');
  }}>
    {children}
  </button>
  );
};

export const EnterKey = () => {
  return (
    <KeyboardKey size='large'>
      ENTER
    </KeyboardKey>
  );
};

export const BackspaceKey = () => {
  return (
    <KeyboardKey size='large'>
      DELETE
    </KeyboardKey>
  );
};
