import React from 'react';
import Divider from '../divider/Divider.js';
import Blurbs from './blurbs/Blurbs.js';
import { Container, Row, Col } from 'reactstrap';
import CodeChart from '../charts/CodeChart.js';
import SystemChart from '../charts/SystemChart.js';
import Layout from '../technology-list/icon-groups/Layout.js';
import Languages from '../technology-list/icon-groups/Languages.js';
import Tools from '../technology-list/icon-groups/Tools.js';

export default class AboutBody extends React.Component {
  render() {
    return (
      <Container>
        <Blurbs/>
        <Divider/>
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-center" >
            <CodeChart/>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center" >
            <SystemChart/>
          </Col>
        </Row>
        <Divider/>
        <Row>
          <Col sm={12} md={6}>
              <Layout/>
          </Col>
          <Col sm={12} md={6}>
              <Languages/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
              <Tools/>
          </Col>
          <Col sm={12} md={6}>
              <Layout/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
              <Layout/>
          </Col>
          <Col sm={12} md={6}>
              <Layout/>
          </Col>
        </Row>
      </Container>
    );
  }
}
