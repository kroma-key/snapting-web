import { useCallback, useEffect, useRef, useState } from "react";

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

  const startTimer = useCallback(() => {
    setIsActive(true);
  }, []);

  const resetTimer = useCallback((newTime: number) => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    setTime(newTime);
    setIsActive(false);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    setIsActive(false);
  }, []);

  const formatTime = useCallback(
    (
      sec: number,
    ): {
      hours: number;
      minutes: number;
      seconds: number;
    } => {
      const hours = Math.floor(sec / 3600);
      const minutes = Math.floor((sec % 3600) / 60);
      const seconds = sec % 60;

      return { hours, minutes, seconds };
    },
    [],
  );

  return {
    time,
    isActive,
    startTimer,
    resetTimer,
    stopTimer,
    formatTime,
  };
};
