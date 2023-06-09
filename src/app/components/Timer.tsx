
import React, { useState, useEffect, useRef } from 'react';
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

const Timer = () => {
  const [currentSessionType, setCurrentSessionType] = useState('Session'); // 'Session' or 'Break'
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [sessionLength, setSessionLength] = useState(60 * 25);
  const [breakLength, setBreakLength] = useState(300);
  const [timeLeft, setTimeLeft] = useState(sessionLength);

  // change timeLeft whenever sessionLength changes
  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength]);

  // listen to timeLeft changes
  useEffect(() => {
    // if timeLeft is zero
    if (timeLeft === 0) {
      // play the audio
      // change session to break or break to session
      if (currentSessionType === 'Session') {
        setCurrentSessionType('Break');
        setTimeLeft(breakLength);
      } else if (currentSessionType === 'Break') {
        setCurrentSessionType('Session');
        setTimeLeft(sessionLength);
      }
    }
  }, [breakLength, currentSessionType, sessionLength, timeLeft]);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60;
    if (newBreakLength > 0) {
      setBreakLength(newBreakLength);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength + 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength);
    }
  };

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength - 60;
    if (newSessionLength > 0) {
      setSessionLength(newSessionLength);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLength + 60;
    if (newSessionLength <= 60 * 60) {
      setSessionLength(sessionLength + 60);
    }
  };

  const isStarted = intervalId !== null;
  const handleStartStopClick = () => {
    if (isStarted) {
      // if we are in started mode:
      // we want to stop the timer
      // clearInterval
      if (intervalId) {
        clearInterval(intervalId);
      }
      setIntervalId(null);
    } else {
      // if we are in stopped mode:
      // decrement timeLeft by one every second (1000 ms)
      // to do this we'll use setInterval
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const handleResetButtonClick = () => {
    // clear the timeout interval
    if (intervalId) {
      clearInterval(intervalId);
    }
    // set the intervalId null
    setIntervalId(null);
    // set the sessiontype to 'Session'
    setCurrentSessionType('Session');
    // reset the session length to 25 minutes
    setSessionLength(60 * 25);
    // reset the break length to 5 minutes
    setBreakLength(60 * 5);
    // reset the timer to 25 minutes (initial session length)
    setTimeLeft(60 * 25);
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-inherit -mt-60">
      <div className="radio-buttons flex flex-row items-center justify-between mb-14">
            <button className="font-medium mx-7 -mt-5 text-blue-600 text-2xl bg-inherit" disabled>pomodoro</button>
      </div>
      <div className="flex w-full justify-around">
        <Break
          breakLength={breakLength}
          decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
          incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
        />
        <TimeLeft
          handleResetButtonClick={handleResetButtonClick}
          handleStartStopClick={handleStartStopClick}
          timerLabel={currentSessionType}
          startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
          timeLeft={timeLeft}
        />
        <Session
          sessionLength={sessionLength}
          decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
          incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
        />
      </div>
      <source src="https://onlineclock.net/audio/options/default.mp3" type="audio/mpeg" />
    </div>
  );
};

export default Timer;