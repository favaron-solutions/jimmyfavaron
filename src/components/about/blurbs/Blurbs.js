import React from 'react';
import SocialBlurb from './SocialBlurb/SocialBlurb.js'
import { Container, Row, Col } from 'reactstrap'

export default class Blurbs extends React.Component {
  render() {
    return (
      <div>
        <body>
          <Container>
            <SocialBlurb/>
          </Container>
        </body>
      </div>
    );
  }
}
