import React from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

const ornekcomponent = () => {
  return (
    <Container>
<Image fluid={true} src="/nobetci.jpeg" alt="smallb" width="100%" />
<Table striped bordered hover responsive={true} variant="dark" style={{ textAlign: 'left' }}>
    <thead>

        <tr>s
            <th>NO.</th>
            <th>ADI</th>
            <th>ADRES</th>
            <th><img src="/phone.png" height="20px" width="20px" alt="llogo" />  TELEFON</th>
            <th>Calisma Saatler</th>

        </tr>
    </thead>
    
</Table>
</Container>
  )
}

export default ornekcomponent
