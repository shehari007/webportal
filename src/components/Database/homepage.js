import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { TAB_ICO1, TAB_ICO2, TAB_ICO3, TAB_ICO4 } from '../Database';


const HomePage = () => {

  const [acilTab1, setacilTab1] = useState([]);
  const [acilTab2, setacilTab2] = useState([]);
  const [acilTab3, setacilTab3] = useState([]);
  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);
  const [card3, setCard3] = useState([]);
  const [card4, setCard4] = useState([]);
  const [popTab1, setpopTab1] = useState([]);
  const [popTab2, setpopTab2] = useState([]);
  const [popTab3, setpopTab3] = useState([]);
  const [popTab4, setpopTab4] = useState([]);


  useEffect(() => {
    const acilTab1 = async () => {
      const res = await axios(`http://localhost/tab_eczaneler_api.php`);
      console.log(res.data);
      setacilTab1(res.data);
    };
    acilTab1();
  }, []);
  useEffect(() => {
    const acilTab2 = async () => {
      const res = await axios(`http://localhost/hastanesi_tab_api.php`);
      console.log("aciltab2" + res.data);
      setacilTab2(res.data);
    };
    acilTab2();
  }, []);
  useEffect(() => {
    const acilTab3 = async () => {
      const res = await axios(`http://localhost/tab_nobetci_api.php`);
      console.log(res.data);
      setacilTab3(res.data);
    };
    acilTab3();
  }, []);
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
  useEffect(() => {
    const card4 = async () => {
      const res = await axios('http://localhost/card4_db_api.php');
      console.log(res.data);
      setCard4(res.data);
    };
    card4();
  }, []);
  useEffect(() => {
    const popTab1 = async () => {
      const res = await axios('http://localhost/tab_saglik_db_api.php');
      console.log(res.data);
      setpopTab1(res.data);
    };
    popTab1();
  }, []);
  useEffect(() => {
    const popTab2 = async () => {
      const res = await axios('http://localhost/tab_avmler_db_api.php');
      console.log(res.data);
      setpopTab2(res.data);
    };
    popTab2();
  }, []);
  useEffect(() => {
    const popTab3 = async () => {
      const res = await axios('http://localhost/tab_spor_salonu_db_api.php');
      console.log(res.data);
      setpopTab3(res.data);
    };
    popTab3();
  }, []);
  useEffect(() => {
    const popTab4 = async () => {
      const res = await axios('http://localhost/marketler_api.php');
      console.log(res.data);
      setpopTab4(res.data);
    };
    popTab4();
  }, []);

  return (

    <>
    
      <div className='row'>
        <div className='col-md-6'>
          <Image fluid={true} src="/map_compas.gif" alt='banner' height="auto" width='auto' />
        </div>
        <div className='col-md-6' style={{ border: '1px solid', borderColor: '#D3D3D3' }}>
          <div className='row' style={{ border: '1px solid', borderColor: '#D3D3D3', marginBottom: '2%' }}>
            <h3 align='center'>Acil Durum Işleri</h3>
          </div>

          <Tabs defaultActiveKey="1" id="justify-tab-example" className="mb-3" justify style={{ fontWeight: 'bold' }}>
            <Tab eventKey="1" title={<span>
              <Image src="/elogo.png" height="20px" width="20px" /><br />{"ECZANELER"}</span>} >
              <div style={{ overflow: 'auto', maxHeight: '320px' }}>
                <Table bordered hover variant='danger' >
                  <thead>
                    <tr>
                    </tr>
                  </thead>
                  {acilTab1.map((data, index) => {
                    return <><tbody>
                      <tr>
                        <td key={index}>{index + 1}</td>
                        <td><a href={data.hak_adresi} style={{ textDecoration: 'underline', color: 'black' }}>{data.isletme_adi}</a></td>
                        <td><a href={data.hak_adresi}>Detaylar..</a></td>
                      </tr>
                    </tbody>
                    </>
                  })}
                </Table>
              </div>
            </Tab>
            <Tab eventKey="2" title={<span>
              <Image src="/hlogo.jpg" height="20px" width="20px" /><br />{"HASTANELER"}</span>} >
              <div style={{ overflow: 'auto', maxHeight: '320px' }}>
                <Table bordered hover variant='danger'>
                  <thead>
                    <tr>
                    </tr>
                  </thead>
                  
                  {acilTab2 !== '0 results[]'? acilTab2.map((data, index) => {
                    return <><tbody>
                      <tr>
                        <td key={index}>{index + 1}</td>
                        <td><a href={data.hak_adresi} style={{ textDecoration: 'underline', color: 'black' }}>{data.isletme_adi}</a></td>
                        <td><a href={data.hak_adresi}>Detaylar..</a></td>
                      </tr>
                    </tbody> 
                    </>
                  }):null}
                </Table>
              </div>
            </Tab>
            <Tab eventKey="3" title={<span>
              <Image src="/ae_4.jpg" height="20px" width="20px" /><br />{"NOBETCI ECZANELER"}</span>} >
              <div style={{ overflow: 'auto', maxHeight: '320px' }}>
                <Table bordered hover variant='danger'>
                  <thead>
                    <tr>
                    </tr>
                  </thead>
                  {acilTab3.map((data, index) => {
                    return <><tbody >
                      <tr>
                        <td key={index}>{index + 1}</td>
                        <td><a href={data.hak_adresi} style={{ textDecoration: 'underline', color: 'black' }}>{data.isletme_adi}</a></td>
                        <td><a href={data.hak_adresi}>Detaylar..</a></td>
                      </tr>
                    </tbody>
                    </>
                  })}
                </Table>
              </div>

            </Tab>
          </Tabs>

        </div>
      </div>
      <br></br>
      <CardGroup style={{ width: '102%', marginLeft: '-1%' }} >
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

        <Card>
          {card4.map((data) => {
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

      <div className="row" style={{ marginTop: '20px', border: '1px solid', borderColor: '#D3D3D3', textDecoration: 'none', height: '500px', width: '102%' }}>
        <div className="col-12" style={{ border: '1px solid', borderColor: '#D3D3D3', marginBottom: '0%', maxHeight: '10%' }}>
          <h2 align="center">Populer Aramalar</h2>
        </div>
        <div >
          <div className="col" align="center" margin="2%">
            <Tabs defaultActiveKey="1" id="justify-tab-example" justify style={{ fontWeight: 'bold', backgroundColor: 'transparent' }}>
              <Tab eventKey="1" title={<span>
                <TAB_ICO1 /><br />{"SAGLIK"}</span>}>
                <div style={{ overflow: 'auto', maxHeight: '320px' }}>
                  <Table  bordered hover>
                    <thead>
                      <tr>
                      </tr>
                    </thead>
                    {popTab1.map((data, index) => {
                      return <><tbody>
                        <tr>
                          <td key={index}>{index + 1}</td>
                          <td><a href={data.hak_adresi} style={{ textDecoration: 'underline', color: 'black' }}>{data.isletme_adi}</a></td>
                          <td><a href={data.hak_adresi}>Detaylar..</a></td>
                        </tr>
                      </tbody>
                      </>
                    })}
                  </Table>
                </div>
              </Tab>
              <Tab eventKey="2" title={<span>
                <TAB_ICO2 /><br />{"AVMLER"}</span>}>
                <div style={{ overflow: 'auto', maxHeight: '320px' }}>
                  <Table  bordered hover>
                    <thead>
                      <tr>
                      </tr>
                    </thead>
                    {popTab2.map((data, index) => {
                      return <><tbody>
                        <tr>
                          <td key={index}>{index + 1}</td>
                          <td><a href={data.hak_adresi} style={{ textDecoration: 'underline', color: 'black' }}>{data.isletme_adi}</a></td>
                          <td><a href={data.hak_adresi}>Detaylar..</a></td>
                        </tr>
                      </tbody>
                      </>
                    })}
                  </Table>
                </div>
              </Tab>
              <Tab eventKey="3" title={<span>
                <TAB_ICO3 /><br />{"KAFELER"}</span>}>
                <div style={{ overflow: 'auto', maxHeight: '320px' }}>
                  <Table  bordered hover>
                    <thead>
                      <tr>
                      </tr>
                    </thead>
                    {popTab3.map((data, index) => {
                      return <><tbody>
                        <tr>
                          <td key={index}>{index + 1}</td>
                          <td><a href={data.hak_adresi} style={{ textDecoration: 'underline', color: 'black' }}>{data.isletme_adi}</a></td>
                          <td><a href={data.hak_adresi}>Detaylar..</a></td>
                        </tr>
                      </tbody>
                      </>
                    })}
                  </Table>
                </div>
              </Tab>
              <Tab eventKey="4" title={<span>
                <TAB_ICO4 /><br />{"MARKETLER"}</span>}>
                <div style={{ overflow: 'auto', maxHeight: '320px' }}>
                  <Table  bordered hover>
                    <thead>
                      <tr>
                      </tr>
                    </thead>
                    {popTab4.map((data, index) => {
                      return <><tbody>
                        <tr>
                          <td key={index}>{index + 1}</td>
                          <td><a href={data.hak_adresi} style={{ textDecoration: 'underline', color: 'black' }}>{data.isletme_adi}</a></td>
                          <td><a href={data.hak_adresi}>Detaylar..</a></td>
                        </tr>
                      </tbody>
                      </>
                    })}
                  </Table>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

      </div>
      <br />
      <div className="row" style={{ border: '1px solid', borderColor: '#D3D3D3', margin: '-1%', backgroundColor: '#f1f1f1' }}>
        <div className="col" style={{ margin: '2%', textAlign: 'center' }}>
          <h5>Size İş Getirir!</h5>
          <p>Aylık 11 milyon’dan fazla tekil ziyaretçi findme.com’da
            ihtiyacı olan ürün ve hizmetleri arıyor.<br /> Rakiplerinizin bir adım önünde olma fırsatını kaçırmayın!</p>
          <h4 font-style="bold">Findme.com'da Reklam!</h4><br />
          <Button style={{ justifySelf: 'center' }} href='/reklam-verin'>REKLAM VERIN!</Button>

        </div>
      </div>
      <br />
     
    </>
  );
}

export default HomePage