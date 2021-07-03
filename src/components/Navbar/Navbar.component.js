import React, { Component } from "react"
import { Link } from 'react-router-dom'

import './Navbar.scss'

/**
 * class Navbar
 */
class Navbar extends Component {
  render() {
    return (
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          Fashion<strong>Outlets</strong>
        </div>
        <ul className="links">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    );
  }
}

export default Navbar;