import React from 'react';
import ProfileBlurb from './ProfileBlurb/ProfileBlurb.js'
import TextBlurb from './TextBlurb/TextBlurb.js'
import { Row, Col } from 'reactstrap'

export default class Blurbs extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <ProfileBlurb/>
          </Col>
          <Col sm={12} md={8} className="d-flex justify-content-center">
            <TextBlurb/>
          </Col>
        </Row>
      </div>
    );
  }
}
