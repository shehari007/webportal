//import React from 'react'
import './esnaflar.css';
import React from 'react'
import Database from '../components/Database/esnaflar_db';
import CAFELER from '../components/Database/kafeler_db';
import MARKET from '..//components/Database/marketler_db';
import Container from 'react-bootstrap/Container';


const esnaflar = () => {
  return (
    <>
    <Container style={{ maxWidth: '90%'}}>
    <Database />
    <MARKET/>
    <CAFELER/>
    
    
    </Container></>
)
    
  
}

export default esnaflar