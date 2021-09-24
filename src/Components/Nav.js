import React from "react";
// import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar-container">
      <ul>
        <Link to = "/">
          <li className="logo">Landkit.</li>
        </Link>
        <div className="others-container">
          <li className="others">Landings</li>
          <li className="others">Pages</li>
          <li className="others">Account</li>
          <li className="others">Documentation</li>
        </div>
        <button className="buy-now">Buy now</button>
      </ul>
    </nav>
  );
}

export default Nav;
