import "./App.css";
import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import icoFB from "./assets/icon-facebook.svg";
import icoINSTA from "./assets/icon-instagram.svg";
import icoPINT from "./assets/icon-pinterest.svg";
import TimeDisplay from "./TimeDisplay";

const App = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 8,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
    const [duration, setDuration] = useState(691200);

    useEffect(() => {
        const interval = setInterval(() => {
          setDuration(duration - 1);
        }, 1000);
        setTimeLeft(intervalToDuration({ start: 0, end: duration * 1000 }));
        return () => clearInterval(interval);
    }, [duration])

    return (
        <div className="main-container">
          {duration && (
            <>
              <section>
                <h1 className="h1-main">We're launching soon</h1>
                <div className="countdown-cont">
                    <TimeDisplay timeUnit="Days" timeLeft={String(timeLeft.days).padStart(2, '0')}/>
                    <TimeDisplay timeUnit="Hours" timeLeft={String(timeLeft.hours).padStart(2, '0')}/>
                    <TimeDisplay timeUnit="Minutes" timeLeft={String(timeLeft.minutes).padStart(2, '0')}/>
                    <TimeDisplay timeUnit="Seconds" timeLeft={String(timeLeft.seconds).padStart(2, '0')}/>
                </div>
              </section>
              <section className="logos-cont">
                <img src={icoFB} />
                <img src={icoPINT} />
                <img src={icoINSTA} />
              </section>
            </>
          )}
        </div>
      );

}

export default App;