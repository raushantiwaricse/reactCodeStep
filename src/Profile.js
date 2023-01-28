import React, { useState } from "react";

function Profile() {
  const [logIn, setLogIn] = useState(2);

  return (
    <div>
      {logIn == 1 ? (
        <h1>Raushan</h1>
      ) : logIn == 2 ? (
        <h1>Tannu</h1>
      ) : (
        <h1>Annu</h1>
      )}
    </div>
  );
}

export default Profile;
