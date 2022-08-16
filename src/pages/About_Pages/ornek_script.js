//import axios from '..//../components/Database/axios_api/card_axios/card2_axios';
import axios from 'axios';
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
//import Image from 'react-bootstrap/Image';
//import {useParams, useSearchParams} from 'react-router-dom';
  import { withRouter } from "react-router";
  //import { useLocation } from "react-router-dom";
  import { useParams } from 'react-router-dom'
import { Item } from 'semantic-ui-react';
  


//Api();
 
 
 export default class   BARDENO_ab extends Component{
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
        //.then(async function (response) {
           // console.log(response);  })
        

    }

    
    getUsersDataframe() {
        
        //axios
        //const params = 
        //const params = new URLSearchParams(window.location.pathname);
        //const [searchparam, setparam] = useSearchParams();
        //const handleid = (event) => {
           // setparam({ id: event.target.value });
          //};
        //const param1 = useSearchParams.get('id');

     
        
        //console.log(handleid);
       
        //const ID = Api();
        
        //const api = Api();
        const Api=() => {
            const params = useParams()
            //const ItemId = params.id
            console.log(params)
            return params
          }
          //Api();
    //console.log(Api)
    axios.get(`http://localhost/card2_db_api.php?id=1`)
            .then(res => {
                const data=res.data
                //console.log(data)
                
               // const res = await axios.get('localhost/card2_db_api.php/get', { params: { isletme_id: 15 } });
                 
                //res.data.args;
                
                const databaseframe = data.map((data, index) =>
                
                {
                    
                    return<>

                            <h1>{data.isletme_adi}</h1>

                    {/*<div width="100%" height="500px" dangerouslySetInnerHTML={{__html: data.DATA_heading}}/>*/}
    
                    
                        </>                   
                }
                    
                    )
                this.setState({databaseframe})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    getUsersDatapic1() {
        axios
            .get(`/databasepic1`, [])
            .then(res => {
                const data=res.data
                console.log(data)
                
                
                
                const databasepic1 = data.map((data, index) =>
                
                {
                    
                    return<>


                      {data.DATA_heading}
                            
    
                    </>
                                        
                }
                    
                    )
                this.setState({databasepic1})

            })
            .catch((error) => {
                console.log(error)
            })

    }

    componentDidMount(){
        //this.getUsersData()
        this.getUsersDataframe()
        //this.getUsersDatapic1()
    }
    
    render() {
        return (
            
            <Container style={{maxWidth: '90%'}}>
             <ListGroup variant="flush" style={{textAlign: 'center', fontSize: '25px'}}>
                   {this.state.database}
                </ListGroup>
                <div style={{display: 'flex', flexdirection: 'row', width: '100%', border: '1px solid',borderColor: '#D3D3D3', justifyContent: 'space-between'}}>
                    {/*<Image fluid={true} src='/anderaban1.jpg' alt='smallb' width="100%"/>*/}
                   </div>
                <br></br>
                {/*<iframe src='http://www.bardenotel.com.tr/' width="100%" height="700px" title='andera'></iframe>*/}
                <br></br>
                <br></br>
                {this.state.databaseframe}
                </Container>
        )
    }
}
