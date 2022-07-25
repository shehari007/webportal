import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const tab1 = () => {
    return (
        <Container>
        <Form>
            <h4>Iletesim Formu</h4>
            <br></br>
            <br></br>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>E-posta</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Adi Soyadi</Form.Label>
          <Form.Control type="email" placeholder="jhon doe" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Yorumlar</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="yorum yaziniz.."/>
        </Form.Group>
        <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label= "Yasal Uyarılar ve Kişisel Verilerin Korunması içeriklerini onaylıyorum"/>
      </Form.Group>
        <Button variant="success">Gonder</Button>{' '}
      </Form>
      </Container>
  )
}

export default tab1