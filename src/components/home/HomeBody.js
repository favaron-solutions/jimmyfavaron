import React from 'react';
import Divider from '../divider/Divider.js';
import { Container } from 'reactstrap';
import PageTitle from '../header/page-title/PageTitle.js';
import Welcome from './welcome/Welcome.js';

export default class HomeBody extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle pageTitle={this.props.pageTitle}/>
        <Divider/>
        <Welcome/>
      </Container>
    );
  }
}
