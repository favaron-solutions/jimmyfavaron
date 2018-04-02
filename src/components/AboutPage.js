import React from 'react';
import Header from './header/Header.js'
import Divider from './divider/Divider.js'
import { Container, Row, Col } from 'reactstrap'

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Header pageTitle={this.props.pageTitle}/>
        <body>
          <Container>
            <Row>
              <Col className="d-flex justify-content-center" sm={12} md={4}>Pic</Col>
              <Col className="d-flex justify-content-center" sm={12} md={4}>Text</Col>
              <Col className="d-flex justify-content-center" sm={12} md={4}>Links</Col>
            </Row>
            <hr className="hrStyle"/>
            <Row>
              <Col className="d-flex justify-content-center" sm={12} md={6}>Chart</Col>
              <Col className="d-flex justify-content-center" sm={12} md={6}>Chart</Col>
            </Row>
            <hr className="hrStyle"/>
            <Row>
              <Col className="d-flex justify-content-center" sm={12} md={12}>Technologies</Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center" sm={12} md={12}>Currently Learning</Col>
            </Row>
          </Container>
        </body>
      </div>
    );
  }
}
