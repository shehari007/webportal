import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';
import Helmet from 'react-helmet';



const ItemDetails = () => {

  const params = useParams()
  const ItemId = params.id
  const [info, setInfo] = useState([]);
  console.log(info);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios(`http://localhost/tum_hakkinda.php?id=${ItemId}`);
      console.log(res.data);
      setInfo(res.data);
    };

    getUsers();
  }, []);

  return (

    <>

      {info.map((el, index) => {
        console.log(el);
        return <><Helmet>
          <title>{el.isletme_adi}</title>
        </Helmet>
            <ListGroup variant="flush" style={{ textAlign: 'center', fontSize: '25px' }}>
              <ListGroup.Item><h1>{el.isletme_adi}</h1></ListGroup.Item>
              <ListGroup.Item><h5>
                <img src='/placeholder.png' height="25px" width="25px" alt='' />
                <a href={el.harita_adresi} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'red' }}>
                  {el.isletme_adres}
                </a></h5>
              </ListGroup.Item>
              <ListGroup.Item><h5>
                <img src='/phone.png' height="25px" width="25px" alt='' />
                {el.isletme_sabit_tel} --- ({el.calisma_saatler})</h5>
              </ListGroup.Item>
            </ListGroup>
            <div style={{ display: 'flex', flexdirection: 'row', width: '100%', border: '1px solid', borderColor: '#D3D3D3', justifyContent: 'space-between' }}>
              <Image fluid={true} src={el.img_1} alt='smallb' width="100%" />
            </div>

            <br></br>
            {(el.resmi_website === ("") ?

              (<Carousel>
                <Carousel.Item interval={1500}>
                  <img
                    className="d-block w-100"
                    src={el.img_2}
                    alt="First slide"
                    width="auto"
                    height="600px" />

                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className="d-block w-100"
                    src={el.img_3}
                    alt="Second slide"
                    width="auto"
                    height="600px" />

                </Carousel.Item>
                <Carousel.Item interval={1500}>
                  <img
                    className="d-block w-100"
                    src={el.img_4}
                    alt="Third slide"
                    width="auto"
                    height="600px" />

                </Carousel.Item>
              </Carousel>)

              : (<>

                <Carousel>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={el.img_2}
                      alt="First slide"
                      width="auto"
                      height="600px" />

                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={el.img_3}
                      alt="Second slide"
                      width="auto"
                      height="600px" />

                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                    <img
                      className="d-block w-100"
                      src={el.img_4}
                      alt="Third slide"
                      width="auto"
                      height="600px" />

                  </Carousel.Item>
                </Carousel>
                <br></br>
                <div width="100%" height="500px" dangerouslySetInnerHTML={{ __html: el.resmi_website }} /></>)
            )}

            <br></br>
            <div width="100%" height="500px" dangerouslySetInnerHTML={{ __html: el.harita_embed }} />
          </>
      })}
    </>
  );
}

export default ItemDetails