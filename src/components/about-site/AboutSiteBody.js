import React from 'react';
import Divider from '../divider/Divider.js';
import { Container } from 'reactstrap';
import PageTitle from '../header/page-title/PageTitle.js';

export default class AboutSiteBody extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle pageTitle={this.props.pageTitle}/>
        <Divider/>
        <div className="d-flex justify-content-center">
        <p className="comingSoon">Coming Soon</p>
        </div>
        <Divider/>
      </Container>
    );
  }
}
