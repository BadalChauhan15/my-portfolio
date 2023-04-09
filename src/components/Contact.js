import React, { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const buttonStyle = {
    margin: "8px 0",
    borderRadius: "5px",
    backgroundColor: "#27ae60",
    color: "white",
    border: "none",
    width: "100px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const [userData, setUserData] = useState({
    name: "",email: "",message: ""
  });

  let name, value;

  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUserData({
      ...user,
      [name]: value,
    });
  };

  const PostData = async (e) => {
    e.preventDefault(); // prevent the default form submission behavior
    const { name, email, message } = user;
    if (name && email && message) {
      axios.post("http://127.0.0.1:3001/Contact", user).then((res) => {
        console.log(res);
      });
    } else {
      alert("Invalid Input");
    }
  };

  return (
    <section id="contact">
      <h2
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "#000000",
        }}
      >
        Contact Me
      </h2>
      <form method="POST">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            color: "#000000",
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            style={{
              padding: "8px",
              margin: "8px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "350px",
            }}
            name="name"
            value={user.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            style={{
              padding: "8px",
              margin: "8px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "350px",
            }}
            name="email"
            value={user.email}
            onChange={handleInput}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            style={{
              padding: "8px",
              margin: "8px 0",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "350px",
            }}
            name="message"
            value={user.message}
            onChange={handleInput}
          ></textarea>
          <button type="submit" value="Submit" style={buttonStyle} onClick={PostData}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;