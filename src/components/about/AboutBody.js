import React from 'react';
import Divider from '../divider/Divider.js';
import Blurbs from './blurbs/Blurbs.js';
import { Container, Row, Col } from 'reactstrap';
import CodeChart from '../charts/CodeChart.js';
import SystemChart from '../charts/SystemChart.js';
import TechnologyList from '../technology-list/TechnologyList.js';

export default class AboutBody extends React.Component {
  render() {
    return (
      <Container>
        <Blurbs/>
        <Divider/>
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-center">
            <CodeChart/>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center" >
            <SystemChart/>
          </Col>
        </Row>
        <Divider/>
        <div className="d-flex justify-content-center">
          <h3> List of Technologies I Use</h3>
        </div>
        <TechnologyList/>
      </Container>
    );
  }
}
