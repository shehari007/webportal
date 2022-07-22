import './brand.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const brand = () => {
  return (
    <>
    
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/anasayfa">
            <img
              alt=""
              src="/logol.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bulurum.com
          </Navbar.Brand>
          <h4 style={{color:'#ffff',fontSize:'20px'}}>
          <img src='./callus.png' alt="" style={{height:'30px', width:'30px'}}/>952-2265-2255</h4>
          
        </Container>
      </Navbar></>
  )
}

export default brand