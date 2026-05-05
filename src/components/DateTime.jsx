import { useEffect, useState } from 'react'

const formatDateTime = (time) => {

  const formattedTime = time.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // change to true if you want AM/PM
  });

  const formattedDate = time.toLocaleDateString("en-IN", {
    weekday: "short",  // Mon, Tue
    day: "numeric",    // 6
    month: "short",    // May
    year: "numeric",   // 2026
  });

  return `${formattedDate} ${formattedTime}`;
}

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return <div>{formatDateTime(time)}</div>
}

export default DateTime