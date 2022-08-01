import axios from '..//Database/kafeler_axios'
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';


export default class database extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deneme: []
        };
    }
    getUsersData() {
        axios
            .get(`/database`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                
                //console.log(JSON.parse(data)["name"]);
                
                const database = data.map((data, index) =>
                
                {
                    
                    return <tbody>
                            <tr>
                            
                            <td key={index}>{index+1}</td>
                            <td key={index}>{data.isletme_adi}</td>
                            <td key={index}><img src='/placeholder.png' height="20px" width="20px" alt=''/>{data.isletme_adres}</td>
                            <td key={index}>{data.isletme_sabit_tel}</td>
                            <td key={index}><a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer">{data.isletim_web_adresi}</a></td>
                            </tr>
                            </tbody>
       
                }
                    
                    )
                this.setState({database})

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    
    render() {
        return (
            <><div align="center">
                <h1>Siirt KAFELER</h1>
            </div>
            <div>
                    <Table striped bordered hover responsive={true} variant='dark'style={{textAlign: 'left'}}>
                        <thead>
                            <tr>
                                <th>NO.</th>
                                <th>ADI</th>
                                <th>ADRES</th>
                                <th><img src='/phone.png' height="20px" width="20px" alt=''/>  TELEFON</th>
                                <th><img src='/globe-grid.png' height="20px" width="20px" alt=''/> WEB-ADRESI</th>
                            </tr>
                        </thead>
                        {this.state.database}
                    </Table>
                </div></>
        )
    }
}