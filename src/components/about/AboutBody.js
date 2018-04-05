import React from 'react';
import Divider from '../divider/Divider.js';
import Blurbs from './blurbs/Blurbs.js';
import { Container, Row, Col } from 'reactstrap';
import Chart from '../chart/Chart.js';

export default class AboutBody extends React.Component {
  render() {
    return (
      <Container>
        <Blurbs/>
        <Divider/>
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-center" >
            <Chart/>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center" >
            <Chart/>
          </Col>
        </Row>
        <Divider/>
      </Container>
    );
  }
}
