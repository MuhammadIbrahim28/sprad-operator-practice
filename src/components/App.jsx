import React, { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const [item, Setitem] = useState([]);
  function changeText(event) {
    const newValue = event.target.value;
    setState(newValue);
  }
  function SetText() {
    Setitem((previtem) => {
      return [...previtem, state];
    });
    setState("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={state} onChange={changeText} />
        <button onClick={SetText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((todoitem) => (
            <li>{todoitem}</li>
          ))}
          ;
        </ul>
      </div>
    </div>
  );
}
export default App;
