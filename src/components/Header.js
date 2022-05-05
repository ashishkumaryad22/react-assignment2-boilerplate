import React from "react";
import { Link, useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  const logOutHandler = () => {
    history.replace("/");
    localStorage.setItem("loggedIn", "");
    console.log("clicked LogOut");
  };
  return (
    <>
      <div className="container my-3">
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "lightgray" }}
        >
          <div className="container-fluid">
            <Link className="navbar-brand " to="/general">
              New App
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/general"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">
                    General
                  </Link>
                </li>
                <div className="d-flex">
                  {/* className="form-control me-2" */}
                  <button
                    className="btn btn-outline-success"
                    onClick={logOutHandler}
                    type="submit"
                  >
                    LogOut
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
