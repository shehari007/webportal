import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { Component } from 'react'
import axios from 'axios';

const newNavbar = () => {
  
  
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 shadow p-6 mb-3 bg-primary" variant='primary'>
          <Container >
            <Navbar.Brand style={{ fontStyle: 'bold', color: 'transparent' }}><div>asdfadfdafsdadfaasdsf</div></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"

            >
              <Offcanvas.Header closeButton style={{ backgroundColor: 'black' }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: 'white' }}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body style={{ backgroundColor: '#0d6efd' }}>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/anasayfa" style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>AnaSayfa</Nav.Link>
                  <NavDropdown

                    title={
                      <span style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>Tum Esnaflar</span>
                    }
                    href="/esnaflar"
                    id={`offcanvasNavbarDropdown-expand-${expand}`
                    }
                  >
                    <NavDropdown.Item href="/esnaflar/AVMLER">Avmler</NavDropdown.Item>
                    <NavDropdown.Item href="/esnaflar/LOKANTA VE RESTORANTLAR">
                      Kafeler
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/esnaflar/KUAFORLER">Küaförler</NavDropdown.Item>
                    <NavDropdown.Item href="/esnaflar/FIRINLAR">Fırınlar</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/esnaflar">
                      Tüm Göster
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/ogrenci" style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>Ögrenci Özel</Nav.Link>
                  <Nav.Link href="/hakkinda" style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>Hakkımızda</Nav.Link>
                  <Nav.Link href="/konaklama" style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>Konaklama</Nav.Link>
                  <Nav.Link href="#" style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>Gezilecek Yerler</Nav.Link>
                  <Nav.Link href="/iletesim" style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }}>İletişim Geç</Nav.Link>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Ne?Nerede?"
                    className="me-2"
                    aria-label="Search"
                    id="searchtext"
                    

                  />
                  <Button variant="success">Gonder</Button>

                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  )
  
}

export default newNavbar
