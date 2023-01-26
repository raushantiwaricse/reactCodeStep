import React from "react";

export function Users(props) {
  return (
    <div>
      <h1>
        {" "}
        Users : {props.name} , {props.email}
      </h1>
    </div>
  );
}
