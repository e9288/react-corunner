import React, {useEffect, useRef, useState} from 'react';

function Stopwatch() {

  let tickRef;
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(() => {
    if(isRunning) {
      setTimer(timer + 1);
    }
  }, 1000);

  // 3번째 인자의 변수 변경이 감지될때 1 인자 실행(componentDidMount)
  // (3번째 인자 없을 경우 초기화 1회만 실행),
  // 컴포넌트 파괴 전 2 인자 실행(componentWillUnMount)
/*  useEffect(() => {
    tickRef = setInterval(tick, 1000);
    return () => {
      clearInterval(tickRef);
    }
  }, []);
  let tick = () => {
    console.log("a");
    if(isRunning){
      setTimer(timer + 1);
    }
  }*/

  let handleStopwatch = () => {
    setIsRunning(!isRunning);
  }

  let initTimer = () => {
    setIsRunning(false);
    setTimer(0);
  }

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{timer}</span>
      <button onClick={handleStopwatch}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={initTimer}>Reset</button>
    </div>
  )
}


// useEffect와 useInterval을 결합한 Custom hook
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Stopwatch;


