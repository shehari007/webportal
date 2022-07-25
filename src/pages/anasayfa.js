import React from 'react'
//import {Slider} from '..//components';
import Carousel from 'react-bootstrap/Carousel';
import './anasayfa.css';
import Table from 'react-bootstrap/Table';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';

const anasayfa = () => {
  return (
    //Slider=================================================================
    <>
     
      <div className="home_set">
        <Carousel margin-top="20px">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://siradisidigital.com/upload/yemek-fotografi-nasil-cekilir-ankara-dijital-ajans-siradisi-digital-5.jpg"
              alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://kemalseckin.com/images/gallery/Yemek-ve-Urun-Fotograflar/thumbs/3010-kemal-seckin-yemek-ve-urun-fotograflari-katibim.jpg"
              alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://shiftdelete.net/wp-content/uploads/2020/11/yemek-fotografciligi-00.jpg"
              alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      
      

      <div>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="/dk.jpg"style={{height: '300px',width: 'auto'}} />
        <Card.Body>
          <Card.Title>HALK KÜTÜPHANESİ</Card.Title>
          <Card.Text>
          Telefon
0 484 223 23 04

Faks:
0 484 223 22 10

E-Posta:
kutuphane56@kulturturizm.gov.tr

Adres:
Bahçelievler Mah. Hazreti Fakirullah Cad. Ebubekir Apt. Altı No:27/5 Merkez/SİİRT



          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/Ap.jpg" style={{height: '300px',width: 'auto'}} />
        <Card.Body>
          <Card.Title>ANDERA PARK AVM</Card.Title>
          <Card.Text>
          Adres: Yeni Mahalle, Cengiz Topel Cd. No:69, 56100 Siirt Merkez/Siirt
Saatler: 
Açık ⋅ Kapanış saati: 22:00


{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/sh.jfif" style={{height: '300px',width: 'auto'}} />
        <Card.Body>
          <Card.Title>ŞEHRİ SARAY</Card.Title>
          <Card.Text>
          Adres: Güres Cad. merkez Siirt

Telefon: (0484) 224 62 24

Web: http://www.sehrisaray.com
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src="/İBH.jpg" style={{height: '300px',width: 'auto'}} />
        <Card.Body>
          <Card.Title>İBN-İ SİNA HASTANESİ</Card.Title>
          <Card.Text>
          Adres : Bahçelievler Mah. Hz. Fakirullah Cad. No :77 Merkez – SİİRT

Tel : 0484 223 99 99   –  444 56 44
WhatsApp : 0850 440 00 56

Fax : 0484 224 56 44

E mail : iletisim@siirtozelibnisinahastanesi.com.tr
ibnisinasiirt@gmail.com
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      
       </div>
       <div>
        <CardGroup style={{alignContent: 'center',justifyContent: 'space-between'}}>
       <div>
       <Table>
      <thead>
        <tr>
          
          <th>populer otel aramalrı</th>
         
        </tr>
        <tr>
              Siirt Barden Hotel
        </tr>
        <tr>
             Çelebi Hotel 
        </tr>
        <tr>
         Hotel Grand Yüksel
        </tr>
      </thead>
      </Table>
      </div>
      <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>populer kütphane aramalrı</th>
         
        </tr>
        <tr>
                Siirt halk kütüphabesi
        </tr>
        <tr>
         Baykan Kaymakamlığı kütüphanesi
        </tr>
        <tr>
         Siirt Beledye Başkanlığı Kütüphanesi
        </tr>
      </thead>
      </Table>
      </div>
      <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>populer AVM aramalrı</th>
         
        </tr>
        <tr>
              Siirt park
        </tr>
        <tr>
         Andera park
        </tr>
        <tr>
         Siirt stiy
        </tr>
      </thead>
      </Table>
      </div>
      <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th>populer Kafe aramalrı</th>
         
        </tr>
        <tr>
              Has Simit Sarayı
        </tr>
        <tr>
         Artuk Bey
        </tr>
        <tr>
         London Kafe
        </tr>
      </thead>
      </Table>
      </div>
      </CardGroup>
      </div>
      
      </>
  )
}

export default anasayfa