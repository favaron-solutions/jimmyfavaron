import React from 'react';
import Divider from '../divider/Divider.js';
import Blurbs from './blurbs/Blurbs.js';
import { Container, Row, Col } from 'reactstrap';
import Chart from '../chart/Chart.js';

var dataArray=[
    {x: 'NodeJS', y: 90, color: '#555'}
    {x: 'ReactJS', y: 70, color: '#555'}
    {x: 'PHP', y: 85, color: '#555'}
    {x: 'Cake', y: 80, color: '#555'}
];


export default class AboutBody extends React.Component {
  render() {
    return (
      <Container>
        <Blurbs/>
        <Divider/>
        <Row>
          <Col sm={12} md={6} className="d-flex justify-content-center" chartInfo={dataArray}>
            <Chart/>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center" chartInfo={dataArray}>
            <Chart/>
          </Col>
        </Row>
        <Divider/>
      </Container>
    );
  }
}
