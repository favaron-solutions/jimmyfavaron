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
        <TechnologyList/>
      </Container>
    );
  }
}
