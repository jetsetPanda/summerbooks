import React from "react";
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-inverse">
      <NavLink to="/" className="navbar-brand font3" exact>
       "So many books, so little time" - Frank Zappa
      </NavLink>
      <ul className="nav navbar-right">
        <li className="nav-item">
          <NavLink to="/saved" exact activeStyle={{ color: 'aquamarine' }}>
              <i className="fa fa-book"></i> &nbsp; View Saved Books</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" exact activeStyle={{ color: 'aquamarine' }}>
            <i class="fas fa-accusoft"></i> &nbsp;Find Books
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
