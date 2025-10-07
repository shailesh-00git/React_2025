import React from "react";
const seats = [
  { seat: "a1", id: "01" },
  { seat: "a2", id: "02" },
  { seat: "a3", id: "03" },
  { seat: "a4", id: "04" },
  { seat: "a5", id: "05" },
];
export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h2>Hamro Bus Sewa</h2>
      <p>Passengers safety and comfort is our priority....</p>
      <p>contact us for ticket book</p>
    </header>
  );
}

function Main() {
  return (
    <div className="main-section">
      <Form />
    </div>
  );
}
function Form() {
  const [selectedId, setSelectedId] = React.useState(null);

  const [username, setUsername] = React.useState();
  const [contact, setContact] = React.useState();
  const [vehicle, setVehicle] = React.useState();

  function submitHandle(e) {
    e.preventDefault();
    // console.log("form was submitted");
    const detail = { username, contact, vehicle, selectedId };
    console.log(detail);
    setSelectedId(null);
    setContact("");
    setUsername("");
  }
  return (
    <form onSubmit={submitHandle}>
      <span>Name: </span>
      <input
        type="text"
        placeholder="Full Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <span>Contact: </span>
      <input
        type="text"
        placeholder="98xxxxxxxxx"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      ></input>
      <select value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
        <option>Bus</option>
        <option>Hice</option>
      </select>
      <div className="seat-selection">
        <ul className="seats">
          <SeatSelection
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </ul>
      </div>
      <button>submit</button>
    </form>
  );
}

function SeatSelection({ selectedId, setSelectedId }) {
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : "");
  }
  return (
    <>
      {seats.map((seat) => (
        <li
          className={`seat ${seat.id === selectedId ? " selected" : ""}`}
          onClick={() => handleClick(seat.id)}
          key={seat.id}
        >
          {seat.seat}
        </li>
      ))}
    </>
  );
}
