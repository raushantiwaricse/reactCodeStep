import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [states, setStates] = useState("");
  const [tnc, setTnc] = useState(false);
  const getFormData = (e) => {
    e.preventDefault();
    console.log(name, tnc, states);
  };
  return (
    <div>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
        <select
          onChange={(e) => {
            setStates(e.target.value);
          }}
        >
          <option>Select</option>
          <option>JH</option>
          <option>DL</option>
          <option>PB</option>
        </select>
        <br />
        <input
          type="checkbox"
          onChange={(e) => {
            setTnc(true);
          }}
        />
        Terms and conditons
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
