import React, { useState, useRef } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import './Stopwatch.css';

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = String(time % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
};

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime(0);
  };

  return (
    <Card>
      <div className="time-display">Time: {formatTime(time)}</div>
      <div className="button-group">
        <Button onClick={startStopwatch}>{isActive ? 'Stop' : 'Start'}</Button>
        <Button onClick={resetStopwatch}>Reset</Button>
      </div>
    </Card>
  );
};

export default Stopwatch;
