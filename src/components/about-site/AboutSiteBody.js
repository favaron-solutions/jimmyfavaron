import React from 'react';
import Divider from '../divider/Divider.js';
import Blurbs from './blurbs/Blurbs.js';
import { Container } from 'reactstrap';
import TechnologyList from '../technology-list/TechnologyList.js';

export default class AboutBody extends React.Component {
  render() {
    return (
      <Container>
        <Divider/>
        <Blurbs/>
        <Divider/>
        <TechnologyList/>
      </Container>
    );
  }
}
