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
    getUsersData() {
        axios_c1
            .get(`/database`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                const database = data.map((data) =>
                {
                    
                    return <>
                    <Card.Title style={{textDecoration: 'underline'}}>{data.isletme_adi}</Card.Title>
                    <Card.Text>
                    <img src='/placeholder.png' height="20px" width="20px" alt=''/>
                    <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'red'}}>
                    {data.isletme_adres} 
                    </a>
                     
                    </Card.Text>
                    </>
                }
                    
                    )
                this.setState({database})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersData1() {
        axios_c1
            .get(`/database1`, [])
            .then(res => {
                const data=res.data
                console.log(data)  
                const database1 = data.map((data) =>    
                {
                    
                    return <>
                    <ListGroup.Item ><img src='/phone.png' height="20px" width="20px" alt=''/> {data.isletme_sabit_tel}</ListGroup.Item>
                    <ListGroup.Item>
                    <img src='/globe-grid.png' height="20px" width="20px" alt=''/>
                        <a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}  >
                         {data.isletim_web_adresi}
                        </a>
                    </ListGroup.Item>
                    </>
                }
                    
                    )
                this.setState({database1})

            })
            .catch((error) => {
                console.log(error)
            })

    }



    getUsersData_c2_t_a() {
        axios_c2
            .get(`/c2_t_a`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                const c2_t_a = data.map((data) =>
                {
                    
                    return <>
                    <Card.Title style={{textDecoration: 'underline'}}>{data.isletme_adi}</Card.Title>
                    <Card.Text>
                    <img src='/placeholder.png' height="20px" width="20px" alt=''/>
                    <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'red'}}>
                    {data.isletme_adres} 
                    </a>
                     
                    </Card.Text>
                    </>
                }
                    
                    )
                this.setState({c2_t_a})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersData_c2_st_w() {
        axios_c2
            .get(`/c2_st_w`, [])
            .then(res => {
                const data=res.data
                console.log(data)  
                const c2_st_w = data.map((data) =>    
                {
                    
                    return <>
                    <ListGroup.Item><img src='/phone.png' height="20px" width="20px" alt=''/> {data.isletme_sabit_tel}</ListGroup.Item>
                    <ListGroup.Item>
                        <a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}  >
                        {data.isletim_web_adresi}
                        </a>
                    </ListGroup.Item>
                    </>
                }
                    
                    )
                this.setState({c2_st_w})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersData_c3_t_a() {
        axios_c3
            .get(`/c3_t_a`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                const c3_t_a = data.map((data) =>
                {
                    
                    return <>
                    <Card.Title style={{textDecoration: 'underline'}}>{data.isletme_adi}</Card.Title>
                    <Card.Text>
                    <img src='/placeholder.png' height="20px" width="20px" alt=''/>
                    <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'red'}}>
                    {data.isletme_adres} 
                    </a>
                     
                    </Card.Text>
                    </>
                }
                    
                    )
                this.setState({c3_t_a})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersData_c3_st_w() {
        axios_c3
            .get(`/c3_st_w`, [])
            .then(res => {
                const data=res.data
                console.log(data)  
                const c3_st_w = data.map((data) =>    
                {
                    
                    return <>
                    <ListGroup.Item><img src='/phone.png' height="20px" width="20px" alt=''/> {data.isletme_sabit_tel}</ListGroup.Item>
                    <ListGroup.Item>
                        <a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}  >
                        {data.isletim_web_adresi}
                        </a>
                    </ListGroup.Item>
                    </>
                }
                    
                    )
                this.setState({c3_st_w})

            })
            .catch((error) => {
                console.log(error)
            })

    }


    getUsersData_c4_t_a() {
        axios_c4
            .get(`/c4_t_a`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                const c4_t_a = data.map((data) =>
                {
                    
                    return <>
                    <Card.Title style={{textDecoration: 'underline'}}>{data.isletme_adi}</Card.Title>
                    <Card.Text>
                    <img src='/placeholder.png' height="20px" width="20px" alt=''/>
                    <a href={data.harita_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'red'}}>
                    {data.isletme_adres} 
                    </a>
                     
                    </Card.Text>
                    </>
                }
                    
                    )
                this.setState({c4_t_a})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersData_c4_st_w() {
        axios_c4
            .get(`/c4_st_w`, [])
            .then(res => {
                const data=res.data
                console.log(data)  
                const c4_st_w = data.map((data) =>    
                {
                    
                    return <>
                    <ListGroup.Item><img src='/phone.png' height="20px" width="20px" alt=''/> {data.isletme_sabit_tel}</ListGroup.Item>
                    <ListGroup.Item>
                        <a href={data.isletim_web_adresi}target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}  >
                        {data.isletim_web_adresi}
                        </a>
                    </ListGroup.Item>
                    </>
                }
                    
                    )
                this.setState({c4_st_w})

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
                    <ul style={{display: 'inline-block', textDecoration: 'none',  justifyContent: 'space-between'}}>
                        <li>{data.isletme_adi}</li>
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
                    <ul style={{display: 'inline-block', textDecoration: 'none',  justifyContent: 'space-between'}}>
                        <li>{data.isletme_adi}</li>
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
                    <ul style={{display: 'inline-block', textDecoration: 'none',  justifyContent: 'space-between'}}>
                        <li>{data.isletme_adi}</li>
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
                    <ul style={{display: 'inline-block', textDecoration: 'none',  justifyContent: 'space-between'}}>
                        <li>{data.isletme_adi}</li>
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
        this.getUsersData()
        this.getUsersData1()
        this.getUsersData_c2_t_a()
        this.getUsersData_c2_st_w()
        this.getUsersData_c3_t_a()
        this.getUsersData_c3_st_w()
        this.getUsersData_c4_t_a()
        this.getUsersData_c4_st_w()
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
            <Card >
            <Card.Img variant="top" src="/Ap.jpg" style={{height: '400px',width: 'auto'}}/>
            <Card.Body>
              {this.state.database}
            </Card.Body>
            <ListGroup className="list-group-flush">
              {this.state.database1}
            </ListGroup>
            <Card.Body>
            <Button variant="warning" href="/andera_ab">Daha oku..</Button>{' '}
            </Card.Body>
            </Card>

            <Card   >
            <Card.Img variant="top" src="/bh.jpg" style={{height: '400px',width: 'auto'}}/>
            <Card.Body>
              {this.state.c2_t_a}
            </Card.Body>
            <ListGroup className="list-group-flush">
              {this.state.c2_st_w}
            </ListGroup>
            <Card.Body>
            <Button variant="warning" href="/barden_otel">Daha oku..</Button>{' '}
            </Card.Body>
            </Card>

            <Card >
            <Card.Img variant="top" src="/spf.jpg" style={{height: '400px',width: 'auto'}}/>
            <Card.Body>
              {this.state.c3_t_a}
            </Card.Body>
            <ListGroup className="list-group-flush">
              {this.state.c3_st_w}
            </ListGroup>
            <Card.Body>
            <Button variant="warning" href="/siirt_park_fit">Daha oku..</Button>{' '}
            </Card.Body>
            </Card>

            <Card  >
            <Card.Img variant="top" src="/co.jpg" style={{height: '400px',width: 'auto'}}/>
            <Card.Body>
              {this.state.c4_t_a}
            </Card.Body>
            <ListGroup className="list-group-flush">
              {this.state.c4_st_w}
            </ListGroup>
            <Card.Body>
            <Button variant="warning" href="/konaklama">Daha oku..</Button>{' '}
            </Card.Body>
            </Card>
            </CardGroup>
            </div>

            <div style={{marginTop: '20px', border: '1px solid',borderColor: '#D3D3D3', textDecoration: 'underline'}}variant="secondary">
            <h3 align="center"marginTop="20px">Populer Aramalar</h3>
            <br></br>
            <Tabs defaultActiveKey="1" id="justify-tab-example" className="mb-3" justify style={{fontWeight: 'bold', backgroundColor: 'transparent'}}>
                <Tab eventKey="1" title={<div>
                    <TAB_ICO1/>{"SAGLIK"}</div>} >
                    {this.state.tab_saglik}
                </Tab>
                <Tab eventKey="2" title={<span>
                    <TAB_ICO2/>{"AVMLER"}</span>}>
                    {this.state.tab_avmler}
                </Tab>
                <Tab eventKey="3" title={<span>
                    <TAB_ICO3/>{"SPOR"}</span>}>
                    {this.state.tab_spors}
                </Tab>
                <Tab eventKey="4" title={<span>
                    <TAB_ICO4/>{"MARKETLER"}</span>}>
                   {this.state.tab_marketler}
                </Tab>
            </Tabs>

            </div>
            </>
           
        )
    }
}