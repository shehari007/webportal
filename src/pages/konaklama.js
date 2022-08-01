import React from 'react'
import KONAKLAMA from '../components/Database/konaklama_db';
import Container from 'react-bootstrap/Container';

const konaklama = () => {
  return (
    
      <Container style={{ maxWidth: '90%'}}>
        <KONAKLAMA/>
        </Container>
  )
}

export default konaklama