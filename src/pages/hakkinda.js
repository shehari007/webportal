import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
//import './hakkinda.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
//import img2 from ''



const hakkinda = () => {
  return (

    //Accordion components---------------------------------------------------------------------------------
    <>
    <Container>
      <div className='acc_container'> 
      <div className='acc_box'>
        

        <Accordion defaultActiveKey={['0']}style={{marginTop: '50px', marginBottom: '50px'}} >
          <Accordion.Item eventKey="0">
            <Accordion.Header>İÇERİĞİMİZ</Accordion.Header>
            <Accordion.Body>
            BN TELEKOM şirketi kuruluşundan bugüne kadar yenilikçi hizmetlerini iletişim, içerik servisleri ve uygulamaları 
            alanlarında telefon ve internet kanalları üzerinden vermektedir. Bu alanlardaki uzmanlığı ve kullandığı ileri teknolojiler 
            ile birlikte BN TELEKOM, güvenilir ve yenilikçi katma değerli hizmetlerini hedeflenen son kullanıcılara, şirketlere ve 
            ortaklarına sunabilmektedir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>VİZYONUMUZ</Accordion.Header>
            <Accordion.Body>
            Bu platformun bir parçası olmak, bulurum.com online ticari rehberi Türkiye genelinde tüm bölgeler ve şehirlerde bütün iş
             kollarında aradığınız detaylı ve cografi bilgiye ulaşmanızı sağlar. Bulurum.com'un esnek ve akıllı arama moturu, yararlı
             yerel bilgileri müşteriler için hazır ve satın almaya uygun olarak sunar. Bulurum.com profesyonel online iletişim ve reklam
               için kesinlikle gerekli bir araçtır.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>KURUMUMUZ</Accordion.Header>
            <Accordion.Body>
            BN TELEKOM 2007 yılında Bilgi Teknolojileri ve İletişim Kurumu tarafından yetkilendirilmiş bir Rehberlik Hizmeti şirketidir ve bulurum.com internet sitesinin sahibidir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>BAĞLANTI ADRESİMİZ</Accordion.Header>
            <Accordion.Body>
            BN TELEKOM hakkında daha fazla bilgi almak için lütfen BN Telekom resmi websitesini ziyaret edin: www.bntelekom.com.tr
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      
      </div>
      </div>
      
      <div>
        
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="/dk.jpg"style={{height: '400px',width: 'auto'}} />
        <Card.Body>
          <Card.Title>DELİKLİ TAŞ KAFE RESTURANT</Card.Title>
          <Card.Text>
          Siirt merkeze 4 kilometre mesafede bulunan ve Botan Vadisi üzerinde yer alan Rasıl Hacar-Delikli Taş, dünyada eşine az rastlanan karstik köprü görünümüne sahip bir doğa harikasıdır.

İzinsiz veya kaynak gösterilmeden yayınlanamaz!
https://www.medyasiirt.com/gundem/rasil-hacarda-huzur-var-h18415.html

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/sp.jpeg" style={{height: '400px',width: 'auto'}} />
        <Card.Body>
          <Card.Title>SİİRT PARK AVM</Card.Title>
          <Card.Text>
          Türkiye’nin önde gelen mağazalarının yer aldığı Siirt Park AVM
          , Üçyol A.Ş’nin yatırımcısı olduğu Siirt’te hizmete girmesiyle birlikte 
          Siirtlilerin rahatça zaman geçirip, alışveriş yapabilecekleri yepyeni bir mekan olmayı hedefliyor.

{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="/bh.jpg" style={{height: '400px',width: 'auto'}} />
        <Card.Body>
          <Card.Title>BARDEN HOTEL</Card.Title>
          <Card.Text>
          Barden Hotel : Teras cafe gün boyunca nefis atıştırmalık , pizza ,pide , lahmacun , hamburger 
          , Taze sıkılmış meyve suları ve kahve çeşitlerini yudumlayarak dostlarınızla hoşça vakit geçireceğiniz,
           Büyüleyici gün batımı ve Siirt manzarası ile sizi karşılayan hatıralarınızda önemli bir yer alacak
            unutulmaz mekandır.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>

      </div>
      </Container>
      </>
   

  )
}

export default hakkinda