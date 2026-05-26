import React from 'react';
import { Row, Col } from 'reactstrap';
import ReactJS from '../../../assets/logos/react/original/ReactOriginal.svg';
import Python from '../../../assets/logos/python/original/PythonOriginal.svg';
import JavascriptOriginal from '../../../assets/logos/javascript/original/JavascriptOriginal.svg';
import NodejsOriginal from '../../../assets/logos/nodejs/original/NodejsOriginal.svg';
import PhpPlain from '../../../assets/logos/php/plain/PhpPlain.svg';
import MySqlOriginal from '../../../assets/logos/mysql/original/MysqlOriginal.svg';

export default class Languages extends React.Component {
  render() {
    return (
    <div className="icon-group">
      <h4> Frameworks and Languages </h4>
      <Row className="d-flex justify-content-center">
        <Col xs={3}>
          <img id="ReactJS" src={ReactJS} className="App-logo" alt="logo" />
          <label for="ReactJS" className="d-flex justify-content-center">ReactJS</label>
        </Col>
        <Col xs={3}>
          <img id="Python" src={Python} className="App-logo" alt="logo" />
          <label for="Python" className="d-flex justify-content-center">Python</label>
        </Col>
        <Col xs={3}>
          <img id="JavascriptOriginal" src={JavascriptOriginal} className="App-logo" alt="logo" />
          <label for="JavascriptOriginal" className="d-flex justify-content-center">Javascript</label>
        </Col>
        <Col xs={3}>
          <img id="NodejsOriginal" src={NodejsOriginal} className="App-logo" alt="logo" />
          <label for="NodejsOriginal" className="d-flex justify-content-center">NodeJS</label>
        </Col>
      </Row>
    </div>
    );
  }
}
