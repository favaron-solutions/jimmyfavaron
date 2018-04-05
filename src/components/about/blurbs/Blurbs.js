import React from 'react';
import ImageBlurb from './ImageBlurb/ImageBlurb.js'
import TextBlurb from './TextBlurb/TextBlurb.js'
import SocialBlurb from './SocialBlurb/SocialBlurb.js'
import { Row, Col } from 'reactstrap'

export default class Blurbs extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12} md={3} className="d-flex justify-content-center">
            <ImageBlurb/>
          </Col>
          <Col sm={12} md={6} className="d-flex justify-content-center ">
            <TextBlurb/>
          </Col>
          <Col sm={12} md={3} className="d-flex justify-content-center">
            <SocialBlurb/>
          </Col>
        </Row>
      </div>
    );
  }
}
