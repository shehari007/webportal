import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './search.css'
import Navbar from 'react-bootstrap/Navbar';


const search = () => {
  return (
    <>
    <div className="cont_search">
    <Container bg="warning" variant="warning" >
    <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Sehir, Cafe, Yerler, Otubus Durak, Kutuphaneler Ara..."
                    className="me-2"
                    aria-label="Search"
                    
                  />
                  <Button variant="danger">Search</Button>
                </Form>
                </Container>
                </div>
                
    </>
  )
}

export default search