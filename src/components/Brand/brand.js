import './brand.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const brand = () => {
  return (
    <>

      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/anasayfa" style={{ fontWeight: "bold", marginTop: "0px" }}>
            <img
              alt=""
              src="/logol.png"
              width="25"
              height="25"
              className="d-inline-block"
            />{' '}
            Findme.com
          </Navbar.Brand>
          <h4 style={{ color: '#ffff', fontSize: '15px', marginTop: '5px' }}>
            <img src='./callus.png' alt="" style={{ height: '30px', width: '30px' }} />952-2265-2255
            <a href='https://www.facebook.com/sharer.php?u=http://localhost:3000/anasayfa' target="_blank" rel="noopener noreferrer"><img src='/fbshare.png' alt='smallb' style={{ height: '16px', width: '16px', marginLeft: '10px' }} /></a>
            <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer"><img src='./inshare.png' alt="SS" style={{ height: '16px', width: '16px', marginLeft: '10px' }} /></a>
            <a href='https://www.twitter.com/' target="_blank" rel="noopener noreferrer"><img src='./twshare.png' alt="SS" style={{ height: '16px', width: '16px', marginLeft: '10px' }} /></a>
          </h4>

        </Container>
      </Navbar></>
  )
}

export default brand