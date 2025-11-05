import './loginSignUp.css';
import React, { useState } from "react";

const LoginSignUp = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const url =
      action === "SignUp"
        ? "http://127.0.0.1:5000/signup"
        : "http://127.0.0.1:5000/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message); 
    } catch (error) {
      console.error("Error:", error);
      alert("Network error");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>

      <div className="inputs">
        <div className="input">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="select">
        Sign up or Login?
      </div>

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("SignUp")}
        >
          Sign Up
        </div>
        <div
          className={action === "SignUp" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        {action}
      </button>
    </div>
  );
};

export default LoginSignUp;
