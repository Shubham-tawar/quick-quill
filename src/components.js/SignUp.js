import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/"); // Redirect to home page after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container my-5 d-flex flex-column align-items-center"
      style={{ width: "100%", maxWidth: "600px" }}
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          id="name"
          onChange={onChange}
          placeholder="Enter Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="email"
          onChange={onChange}
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="password"
          onChange={onChange}
          placeholder="Password" required
          minLength={5} // Ensure password is at least 5 characters long
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="cpassword"
          name="cpassword"
          className="form-control"
          id="ecpassword"
          onChange={onChange} 
          placeholder=" Confirm Password" required
          minLength={5} // Ensure password is at least 5 characters long
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
