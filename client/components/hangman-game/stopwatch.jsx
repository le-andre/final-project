import React, { useEffect, useState } from 'react';

function StopWatch({ setStopWatchStatus, setGameStatus }) {
  const [time, setTime] = useState(120000);
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

  if (setGameStatus === true) {
    setTimerOn(false);
  }

  return (
    <div className="Timers">
      <h2>Guess the programming language!</h2>
      <div id="display">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div id="buttons">
        {!timerOn && time === 120000 && (
          <button onClick={() => setTimerOn(true) + setStopWatchStatus(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time < 120000 && (
          <button onClick={() => setTime(120000) + setStopWatchStatus('') + window.location.reload(false) }>Reset</button>
        )}
        {timerOn && time === 0 && (
          setTimerOn(false)
        )}
      </div>
    </div>
  );
}

export default StopWatch;
