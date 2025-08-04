import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/NoteContext";


const Login = () => {
  const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
  console.log("Loaded API URL:", process.env.REACT_APP_API_URL);


    const [credentials, setCredentials] = useState({"email": "", "password": ""});
   let navigate = useNavigate(); // useNavigate hook to programmatically navigate to different routes when the user logs in successfully

    const context = useContext(noteContext); // this will take the name of user from the context and use it to display it on the Home Page
    const { setUserName } = context;

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({email: credentials.email, password: credentials.password}),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            localStorage.setItem('name', json.name); // this will save the name of the user in local storage
            setUserName({ name: json.name }); // set the user name in the context
            navigate("/"); // Redirect to home page after successful login
        }else {
            alert("Invalid credentials");
        }
    };

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

  return (
    <div className="container my-5 d-flex flex-column align-items-center">
      <form style={{ width: "100%", maxWidth: "600px" }} onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email" name="email"
            className="form-control"
            id="exampleInputEmail1" value={credentials.email}
            aria-describedby="emailHelp" onChange={onChange}
            placeholder="Enter email"
          />
          
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password" name="password"
            className="form-control" value={credentials.password}
            id="exampleInputPassword1" onChange={onChange}
            placeholder="Password"
          />
        </div>
        
        <button type="submit my-2" className="btn btn-primary" >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
