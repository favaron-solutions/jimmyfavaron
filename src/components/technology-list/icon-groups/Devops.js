import React from 'react';
import { Row, Col } from 'reactstrap';
import AmazonOriginal from '../../../assets/logos/amazonwebservices/original/AmazonwebservicesOriginal.svg';
import Docker from '../../../assets/logos/docker/original/DockerOriginal.svg';
import Ubuntu from '../../../assets/logos/ubuntu/plain/UbuntuPlain.svg';
import Apple from '../../../assets/logos/apple/original/AppleOriginal.svg';

export default class Devops extends React.Component {
  render() {
    return (
    <div className="icon-group">
      <h4> Devops </h4>
      <Row className="d-flex justify-content-center">
        <Col xs={3}>
          <img id="AmazonOriginal" src={AmazonOriginal} className="App-logo" alt="logo" />
          <label for="AmazonOriginal" className="d-flex justify-content-center">AWS</label>
        </Col>
        <Col xs={3}>
          <img id="Docker" src={Docker} className="App-logo" alt="logo" />
          <label for="Docker" className="d-flex justify-content-center">Docker</label>
        </Col>
        <Col xs={3}>
          <img id="Ubuntu" src={Ubuntu} className="App-logo" alt="logo" />
          <label for="Ubuntu" className="d-flex justify-content-center">Ubuntu</label>
        </Col>
        <Col xs={3}>
          <img id="Apple" src={Apple} className="App-logo" alt="logo" />
          <label for="Apple" className="d-flex justify-content-center">macOS</label>
        </Col>
      </Row>
    </div>
    );
  }
}
