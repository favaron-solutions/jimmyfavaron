import React from 'react';
import { Row, Col } from 'reactstrap';
import JavascriptOriginal from '../../../assets/logos/javascript/original/JavascriptOriginal.svg';
import NodejsOriginal from '../../../assets/logos/nodejs/original/NodejsOriginal.svg';
import PhpPlain from '../../../assets/logos/php/plain/PhpPlain.svg';
import MySqlOriginal from '../../../assets/logos/mysql/original/MysqlOriginal.svg';

export default class Languages extends React.Component {
  render() {
    return (
    <div className="icon-group">
      <h4> Languages </h4>
      <Row className="d-flex justify-content-center">
        <Col xs={3}>
          <img id="JavascriptOriginal" src={JavascriptOriginal} className="App-logo" alt="logo" />
          <label for="JavascriptOriginal" className="d-flex justify-content-center">Javascript</label>
        </Col>
        <Col xs={3}>
          <img id="NodejsOriginal" src={NodejsOriginal} className="App-logo" alt="logo" />
          <label for="NodejsOriginal" className="d-flex justify-content-center">NodeJS</label>
        </Col>
        <Col xs={3}>
          <img id="PhpPlain" src={PhpPlain} className="App-logo" alt="logo" />
          <label for="PhpPlain" className="d-flex justify-content-center">Php</label>
        </Col>
        <Col xs={3}>
          <img id="MySqlOriginal" src={MySqlOriginal} className="App-logo" alt="logo" />
          <label for="MySqlOriginal" className="d-flex justify-content-center">MySQL</label>
        </Col>
      </Row>
    </div>
    );
  }
}
