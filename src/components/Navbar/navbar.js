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
      <NavLink to="/Anasayfa" activeStyle>
          Ana Sayfa
        </NavLink>
        <NavLink to="/esnaflar" activeStyle>
          Esnaflar Ozel
        </NavLink>
        <NavLink to="/ogrenci" activeStyle>
          Ogrenci Ozel
        </NavLink>
        <NavLink to="/hakkinda" activeStyle>
          Hakkinda
        </NavLink>
        <NavLink to="/iletesim" activeStyle>
          Iletesim
        </NavLink>
      </NavMenu>
    </Nav>
  </>
  )
}

export default navbar