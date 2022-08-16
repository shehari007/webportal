import axios from '..//../components/Database/axios_api/card_axios/card2_axios';
import React, { Component } from 'react'

import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { useSearchParams } from 'react-router-dom';




export default class BARDENO_ab extends Component{
    constructor(props) {
        super(props);
        this.state = {
            deneme: []
        };
    }
    getUsersData() {
        //const instance =  axios.create({
            //baseURL: 'http://localhost/card2_db_api.php?id=2'
        //});
        axios.get('http://localhost/card2_db_api.php?id=2').then(async function (response) {
            console.log(response);  })
        
            
    }

    
    componentDidMount(){
        this.getUsersData()
        
    }
    
    render() {
        return (
            
            <Container>
                
                </Container>
        )
    }
}