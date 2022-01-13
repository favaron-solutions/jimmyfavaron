import React from 'react';
import { Row, Col } from 'reactstrap';
import AmazonOriginal from '../../../assets/logos/amazonwebservices/original/AmazonwebservicesOriginal.svg';
import TerraformOriginal from '../../../assets/logos/hashicorp/original/terraform.svg';
import JenkinsOriginal from '../../../assets/logos/jenkins/original/jenkins.svg';


export default class Layout extends React.Component {
  render() {
    return (
    <div className="icon-group">
      <h4> Cloud </h4>
      <Row className="d-flex justify-content-center">
      <Col xs={3}>
          <img id="AmazonOriginal" src={AmazonOriginal} className="App-logo" alt="logo" />
          <label for="AmazonOriginal" className="d-flex justify-content-center">AWS</label>
        </Col>
        <Col xs={3}>
          <img id="TerraformOriginal" src={TerraformOriginal} className="App-logo" alt="logo" />
          <label for="TerraformOriginal" className="d-flex justify-content-center">Terraform</label>
        </Col>
        <Col xs={3}>
          <img id="JenkinsOriginal" src={JenkinsOriginal} className="App-logo" alt="logo" />
          <label for="JenkinsOriginal" className="d-flex justify-content-center">Jenkins</label>
        </Col>
      </Row>
    </div>
    );
  }
}
