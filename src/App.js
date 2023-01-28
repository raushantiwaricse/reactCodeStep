import React from "react";
import "./App.css";
// import Form from "./Form.js";
// import Profile from "./Profile";
// import Login from "./Login";
import Users from "./Users";
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
  function getData() {
    alert("hello from App function");
  }
  React.useEffect(() => {
    alert("Hello React");
  });
  return (
    <div className="App">
      {/* {status ? <h1>Hello React</h1> : null} */}
      {/* <button onClick={handleHide}>Hide</button>
      <button onClick={handleShow}>Show</button> */}
      {/* <button onClick={handle}>Toogle</button> # toggling */}
      {/* <h1>Hello form</h1> */}
      {/* <Form/> */}
      {/* <Profile /> */}
      {/* <Login />
       */}
      {/* <Users data={getData} />
       */}
    </div>
  );
}

export default App;
