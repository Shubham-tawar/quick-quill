import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  // Using useLocation to log the current path and furthur use it to make the nav link active when clicked
  let location = useLocation();
    let navigate = useNavigate(); // useNavigate hook to programmatically navigate to different routes when the user logs in successfully
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          QuickQuill
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <form className="d-flex">
            {!localStorage.getItem("token") ? (
              <>
                <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
              </>
            ) : (
              <Link className="btn btn-primary mx-1" to="/login" role="button"
                onClick={() => {
                  localStorage.removeItem("token"); // Remove token
                    navigate("/login"); // Redirect to login page
                }}
              >Logout</Link>              
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
