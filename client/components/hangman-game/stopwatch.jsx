import React, { useEffect, useState } from 'react';

function StopWatch({ setStopWatchStatus, gameStatus }) {
  const [time, setTime] = useState(60000);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  if (gameStatus === true && timerOn === true) {
    setTimerOn(false);
  }

  return (
    <div className="Timers">
      <h3>Guess the programming language!</h3>
      <div id="display">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div id="buttons">
        {!timerOn && time === 60000 && (
          <button onClick={() => setTimerOn(true) + setStopWatchStatus(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time < 60000 && (
          <button onClick={() => setTime(60000) + setStopWatchStatus('') + window.location.reload(false) }>Reset</button>
        )}
        {timerOn && time === 0 && (
          setTimerOn(false)
        )}
        {!timerOn && time < 60000 && gameStatus === false && (
          <p id='buttons'>You Lost!</p>
        )}
      </div>
    </div>
  );
}

export default StopWatch;
