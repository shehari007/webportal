import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import Helmet from 'react-helmet';
import Button from 'react-bootstrap/Button';


const Tek_esnaf = () => {
    const params = useParams()
    const ItemId = params.kategori
    const [info, setInfo] = useState([]);
    console.log(info);

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios(`http://localhost/tek_esnaf_api.php?kategori=${ItemId}`);
            console.log(res.data);
            setInfo(res.data);
        };

        getUsers();
    }, []);

    return (
        <> <div className="row">
            <div className="col">
                {info.map((data) => {
                    return <><Helmet>
                        <title>{data.kategori}</title>
                    </Helmet>
                    </>
                })}

                <Carousel fade>
                    {info.map((data) => {
                        return <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src={data.img_1}
                                alt="First slide"
                                width="100%"
                                height="600px"
                            />
                            <Carousel.Caption>
                                <h1>{data.kategori}</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })}
                </Carousel>
                <br /><br />
                <Table striped bordered hover responsive={true} variant='dark' style={{ textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>ADI</th>
                            <th>ADRES</th>
                            <th><img src='/phone.png' height="20px" width="20px" alt='' />  TELEFON</th>
                            <th>Calisma Saatler</th>
                            <th><img src='/globe-grid.png' height="20px" width="20px" alt='' /> WEB-ADRESI</th>
                        </tr>
                    </thead>
                    {info.map((data, index) => {
                        return <tbody>
                            <tr>
                                <td key={index}>{index + 1}</td>
                                <td key={index}><a style={{ textDecoration: 'underline', color: 'white' }} href={data.hak_adresi} target="_blank" rel="noopener noreferrer">{data.isletme_adi}</a></td>
                                <td key={index} ><img src='/placeholder.png' height="20px" width="20px" alt='' />
                                    <a style={{ textDecoration: 'underline', color: 'white' }} href={data.harita_adresi} target="_blank" rel="noopener noreferrer">{data.isletme_adres}</a></td>
                                <td key={index}>{data.isletme_sabit_tel}</td>
                                <td key={index} >{data.calisma_saatler}</td>
                                <td key={index}><a href={data.isletim_web_adresi} target="_blank" rel="noopener noreferrer">{data.isletim_web_adresi}</a></td>
                            </tr>
                        </tbody>
                    })}
                </Table>

            </div>
        </div>
            <br />
            <div className="row" style={{ border: '1px solid', borderColor: '#D3D3D3', margin: '0%', backgroundColor: '#f1f1f1' }}>
                <div className="col" style={{ margin: '2%', textAlign: 'center' }}>
                    <h5>Size İş Getirir!</h5>
                    <p>Aylık 11 milyon’dan fazla tekil ziyaretçi findme.com’da
                        ihtiyacı olan ürün ve hizmetleri arıyor.<br /> Rakiplerinizin bir adım önünde olma fırsatını kaçırmayın!</p>
                    <h4 font-style="bold">Findme.com'da Reklam!</h4><br />
                    <Button style={{ justifySelf: 'center' }} href='/reklam-verin'>REKLAM VERIN!</Button>

                </div>
            </div>
        </>
    )
}

export default Tek_esnaf
