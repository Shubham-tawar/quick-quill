import React,{useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearchQuery,toggleMode, mode }) => {
    console.log("mode:", mode);
  // Using useLocation to log the current path and furthur use it to make the nav link active when clicked
  let location = useLocation();
    let navigate = useNavigate(); // useNavigate hook to programmatically navigate to different routes when the user logs in successfully

    const [text, setText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(text); // update search query in App
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="/logo.png" alt="Logo" style={{ width: "40px", height: "40px" }} />
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
        <div className="collapse navbar-collapse" >
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
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" onChange={(e) => setText(e.target.value)}
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
                    setSearchQuery(""); // clear search
                }}>Logout</Link>                            
            )}
          </form>
          <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="switchCheckDefault" />
                <label class="form-check-label" for="switchCheckDefault">Theme</label>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
