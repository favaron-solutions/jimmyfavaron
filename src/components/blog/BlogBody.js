import React from 'react';
import Divider from '../divider/Divider.js';
import { Container, Row, Col } from 'reactstrap';
import Post from './Post.js'

export default class BlogBody extends React.Component {
  render() {
    return (
      <Container>
        <Divider/>
        <Row>
          <Col xs={12} md={4}><Post /></Col>
          <Col xs={12} md={4}><Post /></Col>
          <Col xs={12} md={4}><Post /></Col>
        </Row>
        <div className="blogRowSpacer">
        </div>
        <Row>
          <Col xs={12} md={4}><Post /></Col>
          <Col xs={12} md={4}><Post /></Col>
          <Col xs={12} md={4}><Post /></Col>
        </Row>
      </Container>
    );
  }
}
