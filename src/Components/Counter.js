import React from "react";

import "./nft.css";

export function CounterSlider() {
  const [counter, setCounter] = React.useState(100);
  const [time, setTime] = React.useState({
    hours: "",
    minutes: "",
    seconds: "",
    days: "",
  });
  const now = 60;

  // Third Attempts
  React.useEffect(() => {
    var date_future = new Date("01/14/2022");

    var date_now = new Date();
    console.log(date_now);

    var seconds = Math.floor((date_future - date_now) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    setTime({ hours: hours, minutes: minutes, seconds: seconds, days: days });
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      <div className="counterSlider">
        <div>
          <div className="rowClass">
            <span className="upper-text">
              {" "}
              Amazing launch coming very soon...
            </span>
            <div className="flex-class">
              <div className="para">
                <span className="fs-48">{time.days}</span>
                <br />
                <span>Days</span>
              </div>
              <div className="para">
                <span className="fs-48">{time.hours}</span>
                <br />
                Hours
              </div>
              <div className="para">
                <span className="fs-48">{time.minutes}</span>
                <br />
                Minutes
              </div>
              <div className="para">
                <span className="fs-48">{time.seconds}</span>
                <br />
                Seconds
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
