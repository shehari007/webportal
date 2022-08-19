import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
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
      console.log(res.data);
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
      <div className='row' style={{ border: '1px solid', borderColor: '#D3D3D3' }}>
        <div className='col-md-6'>
          <Image fluid={true} src="/map_compas.gif" alt='banner' height="auto" width='100%' />
        </div>
        <div className='col-md-6'>
          <Tabs defaultActiveKey="1" id="justify-tab-example" className="mb-3" justify style={{ fontWeight: 'bold', backgroundColor: 'transparent' }}>
            <Tab eventKey="1" title={<span>
              <Image src="/elogo.png" height="20px" width="20px" /><br />{"ECZANELER"}</span>}>
              {acilTab1.map((data, index) => {
                return <><li style={{ margin: "10px", display: "inline-flex", textDecoration: "none" }}>
                  <Button key={index} variant="outline-danger" href={data.hak_adresi}>
                    <Image src='/elogo.png' height="25px" width="25px">
                    </Image><br />
                    <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>{data.isletme_adi}</a></Button>
                </li>
                </>
              })}

            </Tab>
            <Tab eventKey="2" title={<span>
              <Image src="/hlogo.jpg" height="20px" width="20px" /><br />{"HASTANELER"}</span>} >
              {acilTab2.map((data, index) => {
                return <><li style={{ margin: "10px", display: "inline-flex", textDecoration: "none" }}>
                  <Button key={index} variant="outline-danger" href={data.hak_adresi}>
                    <Image src='/hlogo.jpg' height="25px" width="25px">
                    </Image><br />
                    <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>{data.isletme_adi}</a></Button>
                </li>
                </>
              })}

            </Tab>
            <Tab eventKey="3" title={<span>
              <Image src="/ae_4.jpg" height="20px" width="20px" /><br />{"NOBETCI ECZANELER"}</span>} >
              {acilTab3.map((data, index) => {
                return <><li style={{ margin: "10px", display: "inline-flex", textDecoration: "none" }}>
                  <Button key={index} variant="outline-danger" href={data.hak_adresi}>
                    <Image src='/nelogo.png' height="25px" width="25px">
                    </Image><br />
                    <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>{data.isletme_adi}</a></Button>
                </li>
                </>
              })}

            </Tab>
          </Tabs>
        </div>
      </div>
      <br></br>
      <br></br>

      <CardGroup style={{ width: '102%', marginLeft: '-1%' }} >


        {card1.map((data) => {
          return <>

            <Card>
              <Card.Img variant="top" src={data.img_1} alt="cardimg" style={{ height: '400px', width: 'auto' }} />
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
                  <img src='/globe-grid.png' height="20px" width="20px" alt='' />
                  <a href={data.isletim_web_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}  >
                    {data.isletim_web_adresi}
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href={data.hak_adresi}>Daha oku..</Button>{' '}
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
                    {data.isletim_web_adresi}
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href={data.hak_adresi}>Daha oku..</Button>{' '}
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
                    {data.isletim_web_adresi}
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href={data.hak_adresi}>Daha oku..</Button>{' '}
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
                    {data.isletim_web_adresi}
                  </a>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Button variant="primary" href={data.hak_adresi}>Daha oku..</Button>{' '}
              </Card.Body>
            </>
          })}
        </Card>
      </CardGroup>

      <div className="row" style={{ marginTop: '20px', border: '1px solid', borderColor: '#D3D3D3', textDecoration: 'underline' }}>
        <div className="col-12" style={{ border: '1px solid', borderColor: '#D3D3D3', marginBottom: '2%' }}>
          <h2 align="center">Populer Aramalar</h2>


        </div>
        <div className="row">

          <div className="col" >
            <Tabs defaultActiveKey="1" id="justify-tab-example" className="mb-3" justify style={{ fontWeight: 'bold', backgroundColor: 'transparent' }}>
              <Tab eventKey="1" title={<span>
                <TAB_ICO1 /><br />{"SAGLIK"}</span>} style={{ margin: '50px' }}>
                {popTab1.map((data) => {
                  return <><ul style={{ display: 'inline-block', textDecoration: 'underline', justifyContent: 'space-between' }}>
                    <li> <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>{data.isletme_adi}</a></li>
                  </ul>
                  </>
                })}
              </Tab>
              <Tab eventKey="2" title={<span>
                <TAB_ICO2 /><br />{"AVMLER"}</span>} style={{ margin: '50px' }}>
                {popTab2.map((data) => {
                  return <><ul style={{ display: 'inline-block', textDecoration: 'underline', justifyContent: 'space-between' }}>
                    <li> <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>{data.isletme_adi}</a></li>
                  </ul>
                  </>
                })}
              </Tab>
              <Tab eventKey="3" title={<span>
                <TAB_ICO3 /><br />{"SPOR"}</span>} style={{ margin: '50px' }}>
                {popTab3.map((data) => {
                  return <><ul style={{ display: 'inline-block', textDecoration: 'underline', justifyContent: 'space-between' }}>
                    <li> <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>{data.isletme_adi}</a></li>
                  </ul>
                  </>
                })}
              </Tab>
              <Tab eventKey="4" title={<span>
                <TAB_ICO4 /><br />{"MARKETLER"}</span>} style={{ margin: '50px' }}>
                {popTab4.map((data) => {
                  return <><ul style={{ display: 'inline-block', textDecoration: 'underline', justifyContent: 'space-between' }}>
                    <li> <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>{data.isletme_adi}</a></li>
                  </ul>
                  </>
                })}
              </Tab>
            </Tabs>
          </div>
        </div>

      </div>

    </>
  );
}

export default HomePage