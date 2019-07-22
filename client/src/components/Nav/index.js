
import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    
<ul className="nav">
  <li className="nav-item">
        <Link
          to="/bookshelf"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
         My Bookshelf
        </Link>
  </li>
  <li className="nav-item">
  <Link
          to="/"
          className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
        >
        Search
        </Link>
  </li>

  
</ul>
  );
}

export default Nav;


