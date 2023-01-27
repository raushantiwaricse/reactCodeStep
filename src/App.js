// import React, { useState } from "react";
import "./App.css";
// import Form from "./Form.js";
import Profile from "./Profile";
function App() {
  // const [status, setstatus] = useState(false);
  // const handleHide = () => {
  //   setstatus(false);
  // };
  // const handleShow = () => {
  //   setstatus(true);
  // };
  // const handle = () => {
  //   setstatus(!status);
  // };
  return (
    <div className="App">
      {/* {status ? <h1>Hello React</h1> : null} */}
      {/* <button onClick={handleHide}>Hide</button>
      <button onClick={handleShow}>Show</button> */}
      {/* <button onClick={handle}>Toogle</button> # toggling */}

      {/* <h1>Hello form</h1> */}
      {/* <Form/> */}
      <Profile />
    </div>
  );
}

export default App;
