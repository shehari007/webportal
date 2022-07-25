import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';



const hakkimizda = () => {
  return (
    <Container>
        <h4>Hakkimizda</h4>
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
        <Button href="/hakkinda">Daha Fazla Biligi Goster</Button>
        </Container>
  )
}

export default hakkimizda