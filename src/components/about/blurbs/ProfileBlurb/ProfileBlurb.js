import React from 'react';
import ImageBlurb from '../ImageBlurb/ImageBlurb.js'
import SocialBlurb from '../SocialBlurb/SocialBlurb.js'
import { Row } from 'reactstrap'

export default class ProfileBlurb extends React.Component {
  render() {
    return (
      <div>
        <Row className="d-flex justify-content-center">
          <ImageBlurb/>
        </Row>
        <Row className="d-flex justify-content-center">
          <SocialBlurb/>
        </Row>
      </div>
    );
  }
}
