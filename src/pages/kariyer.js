import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { TabContact, TabLegalNotice, Hakkimizda, Pazarpolitik, Kariyer } from '../components';
import Helmet from 'react-helmet';
const kariyer = () => {
  return (
    <><Helmet>
      <title>
        Kariyer
      </title>
    </Helmet>
        <Tab.Container id="left-tabs-example" defaultActiveKey="fifth">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first" href="#">
                    Iletesim Formu
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" href="#">
                    Yasal Uyarılar
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" href="#">
                    Hakkimizda
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" href="#">
                    Pazarlama Politikası
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth" href="#">
                    Kariyer
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content style={{ marginLeft: '0px' }}>
                <Tab.Pane eventKey="first">
                  <TabContact />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <TabLegalNotice />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Hakkimizda />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Pazarpolitik />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Kariyer />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </>
  )
}

export default kariyer