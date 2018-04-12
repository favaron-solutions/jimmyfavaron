import React from 'react';
import { Row, Col } from 'reactstrap';
import ReactJS from '../../../assets/logos/react/original/ReactOriginal.svg';
import Jquery from '../../../assets/logos/jquery/plain/JqueryPlain.svg';
import CakePHP from '../../../assets/logos/cakephp/original/CakephpOriginal.svg';

export default class Frameworks extends React.Component {
  render() {
    return (
    <div className="icon-group">
      <h4> Frameworks </h4>
      <Row className="d-flex justify-content-center">
        <Col sm={3}>
          <img id="ReactJS" src={ReactJS} className="App-logo" alt="logo" />
          <label for="ReactJS" className="d-flex justify-content-center">ReactJS</label>
        </Col>
        <Col sm={3}>
          <img id="Jquery" src={Jquery} className="App-logo" alt="logo" />
          <label for="Jquery" className="d-flex justify-content-center">jQuery</label>
        </Col>
        <Col sm={3}>
          <img id="CakePHP" src={CakePHP} className="App-logo" alt="logo" />
          <label for="CakePHP" className="d-flex justify-content-center">CakePHP</label>
        </Col>
      </Row>
    </div>
    );
  }
}
