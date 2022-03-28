// import React, {Component} from 'react';
// import {MenuItems} from './MenuItems';
// import './Navbar.css';

// class Navbar extends Component {

//     state = {clicked: false}

//     handleClick = () => {
//         this.setState({clicked: !this.state.clicked})
//     }

//     render() {
//         return(
//             <nav className="NavbarItems">
//                 <h1 className="navbar-logo">Nepalese Association of Michigan</h1>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                             <a className={item.cName} href="item.url">
//                             {item.title}
//                             </a>
//                         </li>
//                         )
//                     })}

//                 </ul>

//             </nav>
//         )
//     }
// }

// export default Navbar

import React, { useState } from "react";
import { Button } from "../Button";
import "./Navbar.css";
import Dropdown from "../Dropdown";
import { Link } from "react-router-dom";
import rabin from "./NEAMLogo.png";
import flag from './flag.gif'

function Navbar() {
  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 750) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 750) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={rabin} className="main-logo" />
          <img src={flag} className="main-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-coffee" : "fa-brands fa-google"}></i>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/news" className="nav-links" onClick={closeMobileMenu}>
              News
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              Events <i className="fas fa-caret-down"></i>{" "}
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/about-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Member Login
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
