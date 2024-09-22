import { useState, useEffect } from "react";

const TimeSection = () => {
  const [initialSessionTime, setInitialSessionTime] = useState(10);
  const [timeCount, setTimeCount] = useState(initialSessionTime * 60);
  const [initialTimeBreak, setInitialTimeBreak] = useState(5);
  const [timeBreak, setTimeBreak] = useState(5);

  const [isButtonStartCount, setIsButtonStartCount] = useState(false);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isReset, setIsReset] = useState(false);

  const TIME_INTERVAL = 100;

  // using for update the time value
  useEffect(() => {
    setTimeCount(initialSessionTime * 60);
    setTimeBreak(initialTimeBreak * 60);
  }, [initialSessionTime, initialTimeBreak]);

  useEffect(() => {
    if (isTimeRunning && !isPause && isButtonStartCount && timeCount > 0) {
      const myTimeCount = setInterval(() => {
        console.log("Countdown Time");
        setTimeCount(timeCount - 1);
      }, TIME_INTERVAL);
      // clear the Interval Time to prevent the error
      return () => {
        clearInterval(myTimeCount);
      };
    } else if (isPause && isButtonStartCount && timeCount > 0) {
      setTimeCount(timeCount);
    }
    if (timeCount === 0 && isTimeRunning) {
      setIsButtonStartCount(false);
    }
  }, [isTimeRunning, isButtonStartCount, isPause, timeCount]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="mt-8 bg-redwood w-4/5 h-240 p-20">
      <section>
        <div className="text-4xl flex flex-row justify-center items-center font-mono">
          This is Time Section
        </div>
      </section>
      <section>
        <div className="mt-4 text-4xl flex flex-row justify-center items-center font-mono">
          {isReset
            ? formatTime(initialSessionTime * 60)
            : formatTime(timeCount)}
        </div>
      </section>
      <section className="mt-12 grid grid-cols-2 justify-items-center items-center">
        <button
          onClick={() => {
            setIsButtonStartCount(true);
            setIsPause(false);
            setIsReset(false);
            setIsTimeRunning(true);
          }}
          className="border border-white px-4 rounded-full max-w-[128px] font-mono hover:bg-copper"
          hidden={isTimeRunning && isButtonStartCount && !isPause}
        >
          Start
        </button>
        <button
          onClick={() => {
            setIsPause(true);
            setIsTimeRunning(false);
          }}
          className="border border-white px-4 rounded-full max-w-[128px] font-mono hover:bg-copper"
          hidden={!isTimeRunning || isPause}
        >
          Pause
        </button>
        <button
          onClick={() => {
            setIsReset(true);
            setIsPause(false);
            setIsButtonStartCount(false);
            setIsTimeRunning(false);
            setTimeCount(initialSessionTime * 60);
          }}
          className="border border-white px-4 rounded-full max-w-[128px] font-mono hover:bg-copper"
        >
          Reset
        </button>
      </section>
      <section className="mt-12 grid grid-cols-2 justify-items-center items-center">
        <div className="">
          <div className="px-4 rounded-full text-4xl items-center font-mono">
            Session Timer
          </div>
          <div className="px-4 rounded-full text-4xl font-mono flex flex-row justify-center items-center">
            {initialSessionTime}
          </div>
          <div className="mt-6 grid grid-cols-2">
            <button
              onClick={() => {
                setInitialSessionTime(initialSessionTime - 1);
              }}
              className={
                initialSessionTime === 0
                  ? `rounded-full border border-white w-full h-full max-w-[128px] bg-smoke`
                  : `rounded-full border border-white w-full h-full max-w-[128px] hover:bg-copper`
              }
              disabled={initialSessionTime === 0}
            >
              -
            </button>
            <button
              onClick={() => {
                setInitialSessionTime(initialSessionTime + 1);
              }}
              className="rounded-full border border-white w-full h-full max-w-[128px] hover:bg-copper"
            >
              +
            </button>
          </div>
        </div>
        <div className="">
          <div className="px-4 rounded-full text-4xl font-mono">
            Break Timer
          </div>
          <div className="px-4 rounded-full text-4xl flex flex-row justify-center items-center font-mono">
            {initialTimeBreak}
          </div>
          <div className="mt-6 grid grid-cols-2">
            <button
              onClick={() => setInitialTimeBreak(initialTimeBreak - 1)}
              className={
                initialTimeBreak === 0
                  ? `rounded-full border border-white w-full h-full max-w-[128px] bg-smoke`
                  : `rounded-full border border-white w-full h-full max-w-[128px] hover:bg-copper`
              }
              disabled={initialTimeBreak === 0}
            >
              -
            </button>
            <button
              onClick={() => setInitialTimeBreak(initialTimeBreak + 1)}
              className="rounded-full border border-white w-full h-full max-w-[128px] hover:bg-copper"
            >
              +
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TimeSection;
