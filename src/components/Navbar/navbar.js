import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


const navbar = () => {
  return (
    <>
    {['lg'].map((expand) => (
        <Navbar key={expand} bg="warning" variant="warning" expand={expand} className="mb-3" style={{paddingBottom: '20px'}}>
          <Container fluid>
          <Navbar.Brand href="#" style={{marginLeft: '10px',align:'left'}}>
              
              
              </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Ana Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="/anasayfa">AnaSayfa</Nav.Link>
                  <Nav.Link href="/esnaflar">Esnaflar-Ozel</Nav.Link>
                  <Nav.Link href="/ogrenci">Ogrenci-Ozel</Nav.Link>
                  <Nav.Link href="/hakkinda">Hakkimizda</Nav.Link>
                  <Nav.Link href="/iletesim">Iletesim-gec</Nav.Link>

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="danger">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
  </>
  )
}

export default navbar