import React from 'react';
import { Container, Row, Col } from 'reactstrap'

export default class SocialBlurb extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <i className="fa fa-home">
          </i>

            <span> Home</span>
        </Row>
        <div className="blogRowSpacer">
        </div>
        <Row>
          <i className="fa fa-comment">
          </i>

            <span> About</span>
        </Row>
      </div>
    );
  }
}
