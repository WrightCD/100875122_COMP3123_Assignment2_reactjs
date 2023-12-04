import React from "react";
import './css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link to="/employees">Employee List</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <p>100875122 - Carl Wright</p>
        </ul>
      </nav>
    );
  }

export default Navbar;