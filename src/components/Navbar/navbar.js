import React from 'react'
import './navbar.css'
import { Nav, NavLink, NavMenu } 
    from "./navbarElements";

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

const navbar = () => {
  return (
    <Nav>
        <NavMenu>
        <NavLink to="/Home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/iletesim" activeStyle>
            iletesim Gec
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          
        </NavMenu>
      </Nav>
  )
}

export default navbar