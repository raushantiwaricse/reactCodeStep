import React, { useState } from "react";

function Profile() {
  const [LogIn, setlogIn] = useState(2);
  return (
    <div>
      {LogIn === 1 ? (
        <h1>Welcome Tannu</h1>
      ) : LogIn === 2 ? (
        <h1>Welcome Guest2</h1>
      ) : (
        <h1>Welcome Guest3</h1>
      )}
    </div>
  );
}

export default Profile;
