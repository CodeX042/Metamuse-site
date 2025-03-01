import { useEffect, useState } from 'react';

export const useCountdown = (targetDate: Date | number) => {
  const countdownDate = targetDate instanceof Date ? targetDate.getTime() : new Date(targetDate).getTime();
  const [timeLeft, setTimeLeft] = useState<number>(countdownDate - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(countdownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownDate]);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return { hours, minutes, seconds };
};
