import React, { useState } from "react";

function App() {
  // create the state object
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  // function to handle use input
  function handleInput(event) {
    const { name, value } = event.target;

    //update the setContact  state
    setDetails((prevValues) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValues.lName,
          email: prevValues.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValues.fName,
          lName: value,
          email: prevValues.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValues.fName,
          lName: prevValues.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {details.fName} {details.lName}
      </h1>
      <p>{details.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleInput}
          value={details.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleInput}
          value={details.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleInput}
          value={details.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
