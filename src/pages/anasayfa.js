import React from 'react'
import './anasayfa.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import DENEME from '../components/Database/deneme';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { width } from '@mui/system';



const anasayfa = () => {
  return (
    <>
    <Container style={{ maxWidth: '90%'}}>
      <div style={{ position: 'relative',
  display: 'inline-flex', justifyContent: 'space-between'}}>
    <Container style={{ maxWidth: '120%', display: 'inline-box'}}>
     <div>
    <Image fluid={true} src="/map_compas.gif" alt='banner' maxHeight='200px' width='100%' /></div>  
 
      </Container>
    </div>
    <br></br>
    <br></br>
    <DENEME />
    </Container>
    </>
  )
 }

export default anasayfa