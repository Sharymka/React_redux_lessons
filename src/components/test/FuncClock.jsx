import { useEffect, useState } from 'react';

let timerID = null;

export default function FuncClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    timerID = setInterval(() => setDate(new Date()), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, [date]);

  return (
    <div>
      Сейчас
      {date.toLocaleTimeString()}
    </div>
  );
}
