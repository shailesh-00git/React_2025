import React from "react";

export default function App() {
  return (
    <>
      <DateCounter />;
    </>
  );
}
function DateCounter() {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(0);

  const date = new Date("october 5 2025");
  date.setDate(date.getDate() + count);

  function handleclick() {
    setCount(0);
    setStep(1);
  }
  return (
    <div style={{ textAlign: "center", margin: 50 }}>
      <h1>Date Counter</h1>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>{step}</span>
      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />

        <button onClick={() => setCount(count + step)}>+</button>
      </div>
      <div>
        <p>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today `
            : `${Math.abs(count)} days ago was `}{" "}
          <span>{date.toDateString()}</span>
        </p>
      </div>

      {count !== 0 || step !== 0 ? (
        <div className="reset">
          <button onClick={handleclick}> reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
