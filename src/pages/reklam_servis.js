import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Reklam_servis = () => {
    return (
        <div className="row" style={{ margin: '2%' }}>
            <h1 align="center">Uygun fiyatlarla işinizi internete taşıyın!</h1>

            <div className="col-md-6" style={{ marginTop: '5%' }}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="fırmaAdı">
                            <Form.Label>Fırmanızın Adı*</Form.Label>
                            <Form.Control placeholder="fırma adı yazınız.." />
                        </Form.Group>

                        <Form.Group as={Col} controlId="fırmakategori">
                            <Form.Label>Fırmanızın Faliyeti Kategori</Form.Label>
                            <Form.Control placeholder="kategori yazınız.." />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="fırmaAdres">
                        <Form.Label>Fırmanızın Adres*</Form.Label>
                        <Form.Control placeholder="Mah. sokak. binası.." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fırmaNumara">
                        <Form.Label>Telefon Numarası(sabit veya gsm)*</Form.Label>
                        <Form.Control placeholder="(000)0000000" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fırmaNumara">
                        <Form.Label>Firma Yetkilisi*</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Yorumlarınız</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Gönder
                    </Button>
                </Form>
            </div>
            <div className="col-md-6" align="center" style={{ marginTop: '8%' }}>
                <img src='/complain.png' alt="Image" height="250px" width="250px" align="center" />

                <h5><br />Dilerseniz telefonla ulaşın<br />952-2265-2255</h5>
                <p>Size en uygun findme.com reklam ürününü birlikte bulalım</p>
            </div>

        </div>
    )
}

export default Reklam_servis
