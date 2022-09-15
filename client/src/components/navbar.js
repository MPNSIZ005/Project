import React from "react";
import light from "./light.png"
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink class="navbar-brand" to="/">
        <img src={light} width={140} height="100" alt="Home"></img>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          aria-pressed = "true"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li class="btn btn-info">
              <NavLink className="nav-link" to="/researchers">
                <h3>View All</h3>
                <h3>Researchers</h3>
              </NavLink>
            </li>
  
            <li className="btn btn-success">
              <NavLink className="nav-link" to ="/articles">
                <h3>View All</h3>
                <h3>Articles</h3>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}