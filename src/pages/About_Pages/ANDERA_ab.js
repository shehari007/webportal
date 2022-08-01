import axios from '..//../components/Database/axios_api/card_axios/card1_axios';
import imgaxios from '..//../components/Database/axios_api/card_axios/imgdeneme';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';



export default class ANDERA_ab extends Component{
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
                
                
                
                const database = data.map((data, index) =>
                
                {
                    
                    return<>

                    <ListGroup.Item><h1>{data.isletme_adi}</h1></ListGroup.Item>
                    <ListGroup.Item><h5>
                      <img src='/placeholder.png' height="25px" width="25px" alt=''/>
                      <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color:'red'}}>
                        {data.isletme_adres}
                      </a></h5>
                    </ListGroup.Item>

                    <ListGroup.Item><h5>
                    <img src='/phone.png' height="25px" width="25px" alt=''/>
                      {data.isletme_sabit_tel}</h5>
                    </ListGroup.Item>
                    
                        </>                   
                }
                    
                    )
                this.setState({database})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersDataframe() {
        axios
            .get(`/databaseframe`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                
                
                
                const databaseframe = data.map((data, index) =>
                
                {
                    
                    return<>



                    <div width="100%" height="500px" dangerouslySetInnerHTML={{__html: data.harita_embed}}/>
    
                    
                        </>                   
                }
                    
                    )
                this.setState({databaseframe})

            })
            .catch((error) => {
                console.log(error)
            })

    }
    getUsersDataframepic() {
        imgaxios
            .get(`/databaseframepic`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                
                
                
                const databaseframepic = data.map((data) =>
                
                {
                    
                    return<>


                      
                     <Image fluid={true} src={data.DATA_heading} alt='smallb' width="100%"/>
    
                    
                        </>                   
                }
                    
                    )
                this.setState({databaseframepic})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    componentDidMount(){
        this.getUsersData()
        this.getUsersDataframe()
        this.getUsersDataframepic()
    }
    
    render() {
        return (
            <Container style={{maxWidth: '90%'}}>
             <ListGroup variant="flush" style={{textAlign: 'center', fontSize: '25px'}}>
                   {this.state.database}
                </ListGroup>
                <div style={{display: 'flex', flexdirection: 'row', width: '100%', border: '1px solid',borderColor: '#D3D3D3', justifyContent: 'space-between'}}>
                {this.state.databaseframepic}
                   </div>
                   
                <br></br>
                <iframe src='https://anderapark.com/' width="100%" height="700px" title='resmi_website'></iframe>
                <br></br>
                <br></br>
                {this.state.databaseframe}
                </Container>
        )
    }
}