import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React, { useState, useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

import Button from 'react-bootstrap/Button';
const Hakkinda = () => {
  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);
  const [card3, setCard3] = useState([]);

  useEffect(() => {
    const card1 = async () => {
      const res = await axios('http://localhost/card1_db_api.php');
      console.log(res.data);
      setCard1(res.data);
    };
    card1();
  }, []);
  useEffect(() => {
    const card2 = async () => {
      const res = await axios('http://localhost/card2_db_api.php');
      console.log(res.data);
      setCard2(res.data);
    };
    card2();
  }, []);
  useEffect(() => {
    const card3 = async () => {
      const res = await axios('http://localhost/card3_db_api.php');
      console.log(res.data);
      setCard3(res.data);
    };
    card3();
  }, []);
  return (
    <><div className="row" style={{ border: '1px solid', borderColor: '#D3D3D3', margin: '-1%', backgroundColor: '#f1f1f1' }}>
    <div className="col" style={{ margin: '2%', textAlign: 'center' }}>
      <h5>HAKIMIZDA</h5>
      <p>findme.com’un yıllardır tecrübe edindiği bir sektörde, şirketimizin yeni platformu olan findme.com’un bir
         parçası olmak, genç ve dinamik ekibimize katılmak ister misiniz? findme.com’da her gün kendimizi geliştirmek, 
         çalışanlarımızı eğitmek için çok çalışıyoruz. Sizler de aramıza katılmak, farklı projelerde yer almak,
         kendinize her gün yeni birşey katmak isterseniz açık pozisyonlarımıza aşağıdan ulaşabilirsiniz..<br /></p>
      <h4 font-style="bold">Findme.com</h4><br />

    </div>
   </div>
      <div className="row">
        <div className="col">
          <Accordion defaultActiveKey={['0']} style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Accordion.Item eventKey="0"  >
              <Accordion.Header >İÇERİĞİMİZ</Accordion.Header>
              <Accordion.Body>
                Findme.com şirketi kuruluşundan bugüne kadar yenilikçi hizmetlerini iletişim, içerik servisleri ve uygulamaları
                alanlarında telefon ve internet kanalları üzerinden vermektedir. Bu alanlardaki uzmanlığı ve kullandığı ileri teknolojiler
                ile birlikte Findme.com, güvenilir ve yenilikçi katma değerli hizmetlerini hedeflenen son kullanıcılara, şirketlere ve
                ortaklarına sunabilmektedir.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>VİZYONUMUZ</Accordion.Header>
              <Accordion.Body>
                Bu platformun bir parçası olmak, findme.com online ticari rehberi Türkiye genelinde tüm bölgeler ve şehirlerde bütün iş
                kollarında aradığınız detaylı ve cografi bilgiye ulaşmanızı sağlar. Findme.com'un esnek ve akıllı arama moturu, yararlı
                yerel bilgileri müşteriler için hazır ve satın almaya uygun olarak sunar. Findme.com profesyonel online iletişim ve reklam
                için kesinlikle gerekli bir araçtır.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>KURUMUMUZ</Accordion.Header>
              <Accordion.Body>
                Findme.com 2007 yılında Bilgi Teknolojileri ve İletişim Kurumu tarafından yetkilendirilmiş bir Rehberlik Hizmeti şirketidir ve bulurum.com internet sitesinin sahibidir.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>BAĞLANTI ADRESİMİZ</Accordion.Header>
              <Accordion.Body>
                Findme.com hakkında daha fazla bilgi almak için lütfen BN Telekom resmi websitesini ziyaret edin: www.findme.com
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <br/>

        <CardGroup>
        {card1.map((data) => {
          return <>

            <Card>
              <Card.Img variant="top" src={data.img_1} alt="cardimg" style={{ height: '400px', width: '100%' }} />
              <Card.Body>
                <Card.Title style={{ textDecoration: 'underline' }}>{data.isletme_adi}</Card.Title>
                <Card.Text>
                  <img src='/placeholder.png' height="20px" width="20px" alt='' />
                  <a href={data.harita_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red' }}>
                    {data.isletme_adres}
                  </a>

                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item ><img src='/phone.png' height="20px" width="20px" alt='' /> {data.isletme_sabit_tel}</ListGroup.Item>
                <ListGroup.Item>  
                  <a href={data.isletim_web_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}  >
                  <img src='/globe-grid.png' height="20px" width="20px" alt='' />
                    Web Sitesi
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href={data.hak_adresi}>Fazla Detaylar..</Button>{' '}
              </Card.Body>
            </Card>
          </>
        })}


        <Card>
          {card2.map((data) => {
            return <>
              <Card.Img variant="top" src={data.img_2} style={{ height: '400px', width: 'auto' }} />
              <Card.Body>
                <Card.Title style={{ textDecoration: 'underline' }}>{data.isletme_adi}</Card.Title>
                <Card.Text>
                  <img src='/placeholder.png' height="20px" width="20px" alt='' />
                  <a href={data.harita_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red' }}>
                     {data.isletme_adres}
                  </a>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><img src='/phone.png' height="20px" width="20px" alt='' /> {data.isletme_sabit_tel}</ListGroup.Item>
                <ListGroup.Item>
                <a href={data.isletim_web_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}  >
                  <img src='/globe-grid.png' height="20px" width="20px" alt='' />
                    Web Sitesi
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href={data.hak_adresi}>Fazla Detaylar..</Button>{' '}
              </Card.Body>
            </>
          })}
        </Card>

        <Card>
          {card3.map((data) => {
            return <>
              <Card.Img variant="top" src={data.img_1} style={{ height: '400px', width: 'auto' }} />
              <Card.Body>
                <Card.Title style={{ textDecoration: 'underline' }}>{data.isletme_adi}</Card.Title>
                <Card.Text>
                  <img src='/placeholder.png' height="20px" width="20px" alt='' />
                  <a href={data.harita_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red' }}>
                    {data.isletme_adres}
                  </a>
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item><img src='/phone.png' height="20px" width="20px" alt='' /> {data.isletme_sabit_tel}</ListGroup.Item>
                <ListGroup.Item>
                <a href={data.isletim_web_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}  >
                  <img src='/globe-grid.png' height="20px" width="20px" alt='' />
                    Web Sitesi
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href={data.hak_adresi}>Fazla Detaylar..</Button>{' '}
              </Card.Body>
            </>
          })}
        </Card>
        </CardGroup>

      

    </>


  )
}

export default Hakkinda