import React from 'react';
import { Row, Col } from 'reactstrap';
import Slack from '../../../assets/logos/slack/plain/SlackPlain.svg';
import Twitter from '../../../assets/logos/twitter/original/TwitterOriginal.svg';
import Google from '../../../assets/logos/google/original/GoogleOriginal.svg';

export default class Apis extends React.Component {
  render() {
    return (
    <div className="icon-group">
      <h4> API </h4>
      <Row className="d-flex justify-content-center">
        <Col xs={3}>
          <img id="Twitter" src={Twitter} className="App-logo" alt="logo" />
          <label for="Twitter" className="d-flex justify-content-center">Twitter</label>
        </Col>
        <Col xs={3}>
          <img id="Slack" src={Slack} className="App-logo" alt="logo" />
          <label for="Slack" className="d-flex justify-content-center">Slack</label>
        </Col>
        <Col xs={3}>
          <img id="Google" src={Google} className="App-logo" alt="logo" />
          <label for="Google" className="d-flex justify-content-center">Google</label>
        </Col>
      </Row>
    </div>
    );
  }
}
