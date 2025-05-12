import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingToken = localStorage.getItem("token");

    if (existingToken) {
      alert("Already logged in. Please log out first.");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/login", {
        username,
        password,
      });

      const token = res.data.token;

      localStorage.setItem("token", token);
      console.log("Login successful!", token);
      navigate("/user");
    } catch (err) {
      console.error(
        "Login failed:",
        err.response?.data?.message || err.message
      );
      alert(
        "Login failed: " + (err.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <>
      <center>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />{" "}
          <br />
          <br />
          Password:{" "}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <br />
          <br />
          <input type="submit" />
        </form>
        <br />
        <br />
      </center>
    </>
  );
}

export default Login;
