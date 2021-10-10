//handling complex state in React.Component

import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    //passing an object to the useState function allows to get get a hold of both fName and lName.
    fName: "",
    lName: "",
  });

  function handleClick() {
    console.log("I got clicked!");
  }

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      //Do not try to access event inside the stateful setters as this is likely a synthetic event being reused.
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          lName: value,
          fName: prevValue.fName,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
