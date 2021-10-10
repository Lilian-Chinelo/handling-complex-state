import React, { useState } from "react";

function App() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");

  function handleClick() {
    console.log("I got clicked!");
  }

  function onChangeFirstName(event) {
    const firstName = event.target.value;
    setFirstName(firstName);
  }

  function onChangeLastName(event) {
    const lastName = event.target.value;
    setLastName(lastName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={onChangeFirstName}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={onChangeLastName}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
