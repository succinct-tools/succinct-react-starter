import React from "react";
import { Link } from "@reach/router";
import "./NavBar.scss";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to={process.env.PUBLIC_URL + '/'}>Home</Link>
      </li>
      <li>
        <Link to={process.env.PUBLIC_URL + '/demo'}>Demo</Link>
      </li>
      <li>
        <a href="https://github.com/jenniferlynparsons/succinct-react-starter">
          Download
        </a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
