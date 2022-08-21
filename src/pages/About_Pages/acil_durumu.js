//import axios from '..//../components/Database/axios_api/acil_durumu_axios';
import axios from 'axios'
import React from 'react'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ItemDetails = () => {
    const params = useParams()
    const ItemId = params.acilyerler
    const [info, setInfo] = useState([]);
    const [info2, setInfo2] = useState([]);
    console.log(info);

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios(`http://localhost/acil_durumu_db_api.php?acilyerler=${ItemId}`);
            console.log(res.data);
            setInfo(res.data);
        };

        getUsers();
    }, []);
    useEffect(() => {
        const getUsers2 = async () => {
            const res = await axios(`http://localhost/andera_ab_api.php`);
            console.log(res.data);
            setInfo2(res.data);
        };

        getUsers2();
    }, []);


    return (<>
        
            <Image fluid={true} src="/nobetci.jpeg" alt="smallb" width="100%" />
        <Table striped bordered hover responsive={true} variant="dark" style={{ textAlign: 'left' }}>
                <thead>

                    <tr>
                        <th>NO.</th>
                        <th>ADI</th>
                        <th>ADRES</th>
                        <th><img src="/phone.png" height="20px" width="20px" alt="llogo" />  TELEFON</th>
                        <th>Calisma Saatler</th>

                    </tr>
                </thead>

        {info.map((el, index) => {
            //console.log(el);
            return <>
                    
                <tbody>

                    <tr>

                        <td key={index}>{index + 1}</td>
                        <td key={index}><a style={{ textDecoration: 'underline', color: 'white' }} href={el.hak_adresi} target="_blank" rel="noopener noreferrer">{el.isletme_adi}</a></td>
                        <td key={index} ><img src='/placeholder.png' height="20px" width="20px" alt='' />
                            <a style={{ textDecoration: 'underline', color: 'white' }} href={el.harita_adresi} target="_blank" rel="noopener noreferrer">{el.isletme_adres}</a></td>
                        <td key={index}>{el.isletme_sabit_tel}</td>
                        <td key={index} >{el.calisma_saatler}</td>
                    </tr>
                </tbody>
            </>

        })}
        </Table>
        <div>
        {info2.map((el,index) => {
            return<>
                 <div>{el.isletme_adi}</div>
                 <div>{el.isletme_adres}</div>
                 </>       

        })}
        </div>
    </>
    );
}

export default ItemDetails