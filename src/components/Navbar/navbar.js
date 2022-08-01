import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css';


const navbar = () => {
  return (
    <>
    {['md'].map((expand) => (
        <><Navbar key={expand} bg="warning" expand={expand} className="mb-3" style={{ paddingBottom: '20px', paddingTop: '20px', fontWeight: '650' }}>
        <Container fluid>
          <Navbar.Brand href="#" style={{ marginLeft: '10px', align: 'left' }}>


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
                <Nav.Link href="/esnaflar">Esnaflar</Nav.Link>
                <Nav.Link href="/ogrenci">Ogrenci Ozel</Nav.Link>
                <Nav.Link href="/hakkinda">Hakkimizda</Nav.Link>
                <Nav.Link href="/konaklama">Konaklama</Nav.Link>
                <Nav.Link href="#">Gezilecek Yerler</Nav.Link>
                <Nav.Link href="/iletesim">Iletesim-gec</Nav.Link>

              </Nav>
              

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        
        
      </Navbar></>

        
      ))}
  </>
  )
}

export default navbar