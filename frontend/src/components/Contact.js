import React, { useEffect, useState } from "react";
import "./contact.css";
import axios from "axios";
function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3010/")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  },[users]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const details = { name, age, email };
    axios
      .post("http://localhost:3010/", details)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  const clear = () => {
    setAge("");
    setName("");
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Contact Us</legend>
          <label>Enter the name </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <label>Enter the email </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <label>Enter the age </label>
          <input
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <br />
          <div id="btn">
            <button type="submit">Submit</button>
            <button onClick={clear}>Reset</button>
          </div>
        </fieldset>
      </form>
      {users.length === 0 ? (
        <p>No contacts are added</p>
      ) : (
        <ul>
          {users.map((i) => (
            <li key={i._id}>
              <strong>{i.name}</strong>
              <strong>{i.email}</strong>
              <strong>{i.age}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Contact;
