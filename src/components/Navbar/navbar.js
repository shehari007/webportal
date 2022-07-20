import React from 'react'
import './navbar.css'
import { Nav, NavLink, NavMenu } 
    from "./navbarElements";
//import logo from
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/js/bootstrap.js';

const navbar = () => {
  return (
    <>
    
    <Nav>
    
      <NavMenu>
      <img src='./logo.png' alt='logo'width={85} height={85}/>
      <NavLink to="/Home" activeStyle>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/contact" activeStyle>
          Contact Us
        </NavLink>
        <NavLink to="/blogs" activeStyle>
          Blogs
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>
        
      </NavMenu>
    </Nav>
  </>
  )
}

export default navbar