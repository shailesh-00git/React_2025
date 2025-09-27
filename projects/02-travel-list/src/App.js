export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <State />
    </div>
  );
}
function Logo() {
  return <h1 className="logo "> 💼 Far Away 💰</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for ?</h3>
    </div>
  );
}
function PackingList() {
  return <div className="list ">List</div>;
}
function State() {
  return (
    <footer style={{ textAlign: "center" }}>
      <em>You have X items on your list and packed X items (x% of total)😊 </em>
    </footer>
  );
}
