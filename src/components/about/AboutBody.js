import React from 'react';
import Divider from '../divider/Divider.js'
import Blurbs from './blurbs/Blurbs.js'
import { Container, Row, Col } from 'reactstrap'

export default class AboutBody extends React.Component {
  render() {
    return (
      <Container>
        <Blurbs/>
      </Container>
    );
  }
}
