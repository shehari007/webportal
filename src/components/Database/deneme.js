import axios_c1 from './axios_api/card_axios/card1_axios';
import axios_c2 from './axios_api/card_axios/card2_axios';
import axios_c3 from './axios_api/card_axios/card3_axios';
import axios_c4 from './axios_api/card_axios/card4_axios';
import axios_tab1 from './axios_api/populer_aramalr_axios/tab1_saglik';
import axios_tab2 from './axios_api/populer_aramalr_axios/tab2_avmler';
import axios_tab3 from './axios_api/populer_aramalr_axios/tab3_spors';
import axios_tab4 from './axios_api/axios_marketler';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {TAB_ICO1, TAB_ICO2, TAB_ICO3, TAB_ICO4} from '../Database';



export default class database extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deneme: []
        };
    }
    getUserCard1() {
        axios_c1
            .get(`/card1`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                const card1 = data.map((data) =>
                {
                    
                    return <>
               
                        
                        <Card.Img variant="top" src={data.img_1}alt="cardimg" style={{height: '400px',width: 'auto'}}/>
                        <Card.Body>
                        <Card.Title style={{textDecoration: 'underline'}}>{data.isletme_adi}</Card.Title>
                        <Card.Text>
                        <img src='/placeholder.png' height="20px" width="20px" alt=''/>
                        <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'red'}}>
                        {data.isletme_adres} 
                        </a>
                        
                        </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                        <ListGroup.Item ><img src='/phone.png' height="20px" width="20px" alt=''/> {data.isletme_sabit_tel}</ListGroup.Item>
                        <ListGroup.Item>
                        <img src='/globe-grid.png' height="20px" width="20px" alt=''/>
                            <a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}  >
                             {data.isletim_web_adresi}
                            </a>
                        </ListGroup.Item>
                        </ListGroup>
                            <Card.Body>
                            <Button variant="warning" href={data.hak_adresi}>Daha oku..</Button>{' '}
                            </Card.Body>
                        
                        </>

                }
                    
                    )
                this.setState({card1})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUserCard2() {
        axios_c2
            .get(`/card2`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                const card2 = data.map((data) =>
                {
                    
                    return <>
                    <Card.Img variant="top" src={data.img_2} style={{height: '400px',width: 'auto'}}/>
                    <Card.Body>
                    <Card.Title style={{textDecoration: 'underline'}}>{data.isletme_adi}</Card.Title>
                    <Card.Text>
                    <img src='/placeholder.png' height="20px" width="20px" alt=''/>
                    <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'red'}}>
                    {data.isletme_adres} 
                    </a>
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item><img src='/phone.png' height="20px" width="20px" alt=''/> {data.isletme_sabit_tel}</ListGroup.Item>
                    <ListGroup.Item>
                        <a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}  >
                        {data.isletim_web_adresi}
                        </a>
                    </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Button variant="warning" href={data.hak_adresi}>Daha oku..</Button>{' '}
                    </Card.Body>
                    </>
                }
                    
                    )
                this.setState({card2})

            })
            .catch((error) => {
                console.log(error)
            })

    }


    getUserCard3() {
        axios_c3
            .get(`/card3`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                const card3 = data.map((data) =>
                {
                    
                    return <>
                    <Card.Img variant="top" src={data.img_1} style={{height: '400px',width: 'auto'}}/>
                    <Card.Body>
                    <Card.Title style={{textDecoration: 'underline'}}>{data.isletme_adi}</Card.Title>
                    <Card.Text>
                    <img src='/placeholder.png' height="20px" width="20px" alt=''/>
                    <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'red'}}>
                    {data.isletme_adres} 
                    </a>
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item><img src='/phone.png' height="20px" width="20px" alt=''/> {data.isletme_sabit_tel}</ListGroup.Item>
                    <ListGroup.Item>
                        <a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}  >
                        {data.isletim_web_adresi}
                        </a>
                    </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Button variant="warning" href={data.hak_adresi}>Daha oku..</Button>{' '}
                    </Card.Body>
                    </>
                }
                    
                    )
                this.setState({card3})

            })
            .catch((error) => {
                console.log(error)
            })

    }

   


    getUserCard4() {
        axios_c4
            .get(`/card4`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                const card4= data.map((data) =>
                {
                    
                    return <>
                   <Card.Img variant="top" src={data.img_1} style={{height: '400px',width: 'auto'}}/>
                    <Card.Body>
                    <Card.Title style={{textDecoration: 'underline'}}>{data.isletme_adi}</Card.Title>
                    <Card.Text>
                    <img src='/placeholder.png' height="20px" width="20px" alt=''/>
                    <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'red'}}>
                    {data.isletme_adres} 
                    </a>
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item><img src='/phone.png' height="20px" width="20px" alt=''/> {data.isletme_sabit_tel}</ListGroup.Item>
                    <ListGroup.Item>
                        <a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}  >
                        {data.isletim_web_adresi}
                        </a>
                    </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                    <Button variant="warning" href={data.hak_adresi}>Daha oku..</Button>{' '}
                    </Card.Body>
                    </>
                }
                    
                    )
                this.setState({card4})

            })
            .catch((error) => {
                console.log(error)
            })

    }

  


    getUsersData_tab_saglik() {
        axios_tab1
            .get(`/tab_saglik`, [])
            .then(res => {
                const data=res.data
                console.log(data)  
                const tab_saglik = data.map((data) =>    
                {
                    
                    return <>
                    <ul style={{display: 'inline-block', textDecoration: 'underline',  justifyContent: 'space-between'}}>
                    <li> <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer"style={{textDecoration: 'none', color:'black'}}>{data.isletme_adi}</a></li>
                    </ul>
                    
                    </>
                }
                    
                    )
                this.setState({tab_saglik})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersData_tab_avmler() {
        axios_tab2
            .get(`/tab_avmler`, [])
            .then(res => {
                const data=res.data
                console.log(data)  
                const tab_avmler = data.map((data) =>    
                {
                    
                    return <>
                    <ul style={{display: 'inline-block', textDecoration: 'underline',  justifyContent: 'space-between'}}>
                    <li> <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer"style={{textDecoration: 'none', color:'black'}}>{data.isletme_adi}</a></li>
                    </ul>
                    
                    </>
                }
                    
                    )
                this.setState({tab_avmler})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersData_tab_spors() {
        axios_tab3
            .get(`/tab_spors`, [])
            .then(res => {
                const data=res.data
                console.log(data)  
                const tab_spors = data.map((data) =>    
                {
                    
                    return <>
                    <ul style={{display: 'inline-block', textDecoration: 'underline',  justifyContent: 'space-between'}}>
                    <li> <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer"style={{textDecoration: 'none', color:'black'}}>{data.isletme_adi}</a></li>
                    </ul>
                    
                    </>
                }
                    
                    )
                this.setState({tab_spors})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersData_tab_marketler() {
        axios_tab4
            .get(`/tab_marketler`, [])
            .then(res => {
                const data=res.data
                console.log(data)  
                const tab_marketler = data.map((data) =>    
                {
                    
                    return <>
                    <ul style={{display: 'inline-block', textDecoration: 'underline',  justifyContent: 'space-between'}}>
                    <li> <a href={data.hak_adresi} target="_blank" rel="noopener noreferrer"style={{textDecoration: 'none', color:'black'}}>{data.isletme_adi}</a></li>
                    </ul>
                    
                    </>
                }
                    
                    )
                this.setState({tab_marketler})

            })
            .catch((error) => {
                console.log(error)
            })

    }


    componentDidMount(){
        this.getUserCard1()
        this.getUserCard2()
        this.getUserCard3()
        this.getUserCard4()
        this.getUsersData_tab_saglik()
        this.getUsersData_tab_avmler()
        this.getUsersData_tab_spors()
        this.getUsersData_tab_marketler()
    }
    
    
    render() {
        return (
            
            <>
           
            <div>

            <CardGroup>
            
            <Card>
            {this.state.card1}
            </Card>

            <Card>
            {this.state.card2}           
            </Card>

            <Card >
            {this.state.card3}
            </Card>

            <Card  >
            {this.state.card4}
            </Card>
            </CardGroup>
            </div>

            <div style={{marginTop: '20px', border: '1px solid',borderColor: '#D3D3D3', textDecoration: 'underline'}}variant="secondary">
            <div style={{marginTop: '20px'}}><h3 align="center"marginTop="20px">Populer Aramalar</h3></div>
            <br></br>
            <Tabs defaultActiveKey="1" id="justify-tab-example" className="mb-3" justify style={{fontWeight: 'bold', backgroundColor: 'transparent'}}>
                <Tab eventKey="1" title={<div>
                    <TAB_ICO1/><br/>{"SAGLIK"}</div>} style={{margin: '50px'}} >
                    {this.state.tab_saglik}
                </Tab>
                <Tab eventKey="2" title={<span>
                    <TAB_ICO2/><br/>{"AVMLER"}</span>}style={{margin: '50px'}}>
                    {this.state.tab_avmler}
                </Tab>
                <Tab eventKey="3" title={<span>
                    <TAB_ICO3/><br/>{"SPOR"}</span>}style={{margin: '50px'}}>
                    {this.state.tab_spors}
                </Tab>
                <Tab eventKey="4" title={<span>
                    <TAB_ICO4/><br/>{"MARKETLER"}</span>}style={{margin: '50px'}}>
                   {this.state.tab_marketler}
                </Tab>
            </Tabs>

            </div>
            </>
           
        )
    }
}