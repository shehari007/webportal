import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { TabContact,TabLegalNotice, Hakkimizda} from '../components';

const yasaluyari = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="second">
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
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content style={{marginLeft: '0px'}}>
            <Tab.Pane eventKey="first">
              <TabContact />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <TabLegalNotice />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Hakkimizda/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default yasaluyari