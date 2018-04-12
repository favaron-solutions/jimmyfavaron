import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Post from '../blog/Post.js'

export default class ProjectsBody extends React.Component {
  render() {
    return (
      <Container>
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
