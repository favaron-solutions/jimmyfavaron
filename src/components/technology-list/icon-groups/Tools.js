import React from 'react';
import Divider from '../../divider/Divider.js';
import { Container, Row, Col } from 'reactstrap';
import BootstrapPlain from '../../../assets/logos/bootstrap/plain/BootstrapPlain.svg';
import Css3Plain from '../../../assets/logos/css3/plain/Css3Plain.svg';
import Html5Plain from '../../../assets/logos/html5/plain/Html5Plain.svg';
import SketchLine from '../../../assets/logos/sketch/line/SketchLine.svg';

export default class Tools extends React.Component {
  render() {
    return (
    <div className="icon-group">
      <h4> Tools </h4>
      <Row>
        <Col sm={3}>
          <img id="BootstrapPlain" src={BootstrapPlain} className="App-logo" alt="logo" />
          <label for="BootstrapPlain" className="d-flex justify-content-center">Bootstrap</label>
        </Col>
        <Col sm={3}>
          <img id="Css3Plain" src={Css3Plain} className="App-logo" alt="logo" />
          <label for="Css3Plain" className="d-flex justify-content-center">CSS3</label>
        </Col>
        <Col sm={3}>
          <img id="Html5Plain" src={Html5Plain} className="App-logo" alt="logo" />
          <label for="Html5Plain" className="d-flex justify-content-center">HTML5</label>
        </Col>
        <Col sm={3}>
          <img id="SketchLine" src={SketchLine} className="App-logo" alt="logo" />
          <label for="SketchLine" className="d-flex justify-content-center">Sketch</label>
        </Col>
      </Row>
    </div>
    );
  }
}
