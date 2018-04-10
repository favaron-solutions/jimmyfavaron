import React from 'react';
import Divider from '../../divider/Divider.js';
import { Container, Row, Col } from 'reactstrap';
import GithubOriginal from '../../../assets/logos/github/original/GithubOriginal.svg';
import GitOriginal from '../../../assets/logos/git/original/GitOriginal.svg';
import NpmOriginal from '../../../assets/logos/npm/original-wordmark/NpmOriginalWordmark.svg';
import PhpstormPlain from '../../../assets/logos/phpstorm/plain/PhpstormPlain.svg';

export default class Tools extends React.Component {
  render() {
    return (
    <div className="icon-group">
      <h4> Tools </h4>
      <Row className="d-flex justify-content-center">
        <Col sm={3}>
          <img id="GithubOriginal" src={GithubOriginal} className="App-logo" alt="logo" />
          <label for="GithubOriginal" className="d-flex justify-content-center">Github</label>
        </Col>
        <Col sm={3}>
          <img id="GitOriginal" src={GitOriginal} className="App-logo" alt="logo" />
          <label for="GitOriginal" className="d-flex justify-content-center">Git</label>
        </Col>
        <Col sm={3}>
          <img id="NpmOriginal" src={NpmOriginal} className="App-logo" alt="logo" />
          <label for="NpmOriginal" className="d-flex justify-content-center">npm</label>
        </Col>
        <Col sm={3}>
          <img id="PhpstormPlain" src={PhpstormPlain} className="App-logo" alt="logo" />
          <label for="PhpstormPlain" className="d-flex justify-content-center">PhpStorm</label>
        </Col>
      </Row>
    </div>
    );
  }
}
