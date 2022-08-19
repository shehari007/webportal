import axios from 'axios'
import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';

const Avmler_db = () => {

    const [avmlerInfo, setavmlerInfo] = useState([]);
    
    useEffect(() => {
        const avmlerInfo = async () => {
            const res = await axios(`http://localhost/connect1.php`);
            console.log(res.data);
            setavmlerInfo(res.data);
        };
        avmlerInfo();
    }, []);

    return (
        <><div align="center">
            <h1>SIIRT AVMLER</h1>
        </div>
            <div>
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
                    {avmlerInfo.map((data, index) => {
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
            </div></>

    )
}
export default Avmler_db
