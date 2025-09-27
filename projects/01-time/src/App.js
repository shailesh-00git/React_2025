import React from "react";
import "./App.css";

export default function App() {
  const [interval, setIntervalValue] = React.useState(1);
  const [count, setCount] = React.useState(0);

  const date = new Date("september 27 2025");
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <Interval interval={interval} setIntervalValue={setIntervalValue} />
      <Count interval={interval} count={count} setCount={setCount} />
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today `
          : `${Math.abs(count)} days ago was `}
      </span>
      <sapn>{date.toDateString()}</sapn>
    </div>
  );
}

function Interval({ interval, setIntervalValue }) {
  return (
    <div className="interval">
      <button className="btn" onClick={() => setIntervalValue(interval - 1)}>
        -
      </button>
      <span className="value">{interval}</span>
      <button className="btn" onClick={() => setIntervalValue(interval + 1)}>
        +
      </button>
    </div>
  );
}

function Count({ interval, count, setCount }) {
  return (
    <div className="count">
      <button className="btn" onClick={() => setCount(count - interval)}>
        -
      </button>
      <span className="value">{count}</span>
      <button className="btn" onClick={() => setCount(count + interval)}>
        +
      </button>
    </div>
  );
}
