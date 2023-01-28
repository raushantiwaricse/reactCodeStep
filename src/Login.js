import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const loginHandle = (e) => {
    e.preventDefault();
    console.log(user, pass);
  };
  const userhandle = (e) => {
    setUser(e.target.value);
  };
  const passhandle = (e) => {
    setPass(e.target.value);
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={loginHandle}>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={userhandle}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={passhandle}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
