import React from "react";
import "./App.css";

export default function App() {
  const [interval, setIntervalValue] = React.useState(1);

  return (
    <div className="container">
      <Interval interval={interval} setIntervalValue={setIntervalValue} />
      <Count interval={interval} />
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

function Count({ interval }) {
  const [count, setCount] = React.useState(0);

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
