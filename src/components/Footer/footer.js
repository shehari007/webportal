
import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css';
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    
    <CDBFooter className="shadow" style={{ backgroundColor: '#ffc107', color: 'black', marginTop: '10px'}}>
    <CDBBox display="flex" flex="column" className=" mx-auto py-5" style={{ width: '80%' }}>
      <CDBBox display="flex" justifyContent="between" className="flex-wrap">
        <CDBBox>
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src="/logol.png"
              width="30px"
            />
            <span className="ml-3 h5 font-weight-bold">Bulurum.com</span> 
          </a>
          <br/>
          <p>Ünalan Mah. Libadiye Cad. No:82F, G Blok, Üsküdar<br/>İstanbul, Üsküdar, 34700</p>
        </CDBBox>
        <CDBBox display="flex" style={{ width: '100%' }} justifyContent="between" className="flex-wrap">
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '700' }}>
              Quick Links
            </p>
            <CDBBox flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/anasayfa">Ana Sayfa</CDBFooterLink>
              <CDBFooterLink href="/hakkimizda">Hakkimizda</CDBFooterLink>
              <CDBFooterLink href="/iletesim">Iletesim</CDBFooterLink>
              <CDBFooterLink href="/yasaluyari">Yasal Uyari</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '700' }}>
              Hizmetler
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/ogrenci">Ogrenci-Ozel</CDBFooterLink>
              <CDBFooterLink href="/esnaflar">Esnaflar</CDBFooterLink>
              <CDBFooterLink href="/kariyer">Kariyer</CDBFooterLink>
              <CDBFooterLink href="/pazarpolitik">Pazarlama Politikası</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '700' }}>
              Populer Aramalar
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/ogrenci">otel</CDBFooterLink>
              <CDBFooterLink href="/esnaflar">kutuphaneler</CDBFooterLink>
              <CDBFooterLink href="/">avmler</CDBFooterLink>
              <CDBFooterLink href="/">tatlici</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
      </CDBBox>
      <CDBBox display="flex" className="mt-4" justifyContent="between">
        {/*<small className="ml-2">&copy; Bulurum.com, 2022. All rights reserved./>*/}
        <CDBBox display="flex" style={{marginRight: '20px'}} justifyContent="center">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBBox>
    <Navbar bg="dark" variant="dark">
        
        <Container style={{justifyContent: 'center'}}>
          <Navbar.Brand href="/anasayfa" style={{ alignContent: 'center', fontSize: '15px' }}>
          <small className="ml-2">&copy; Bulurum.com, 2022. All rights reserved.</small>
          </Navbar.Brand>
          
          
        </Container>
        
      </Navbar>
  </CDBFooter>
  
        
  )
}

export default footer