import { useEffect, useRef, useState } from "react";

export const useTimer = (initialTime: number) => {
  const [time, setTime] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && time > 0) {
      timerId.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(timerId.current!);
    }

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = (newTime: number) => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    setTime(newTime);
    setIsActive(false);
  };

  const stopTimer = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    setIsActive(false);
  };

  return {
    time,
    isActive,
    startTimer,
    resetTimer,
    stopTimer,
  };
};
