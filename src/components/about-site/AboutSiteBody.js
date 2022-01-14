import React from 'react';
import Divider from '../divider/Divider.js';
import { Container } from 'reactstrap';
import PageTitle from '../header/page-title/PageTitle.js';
import cicd from '../../assets/ci-cd.drawio.svg';

export default class AboutSiteBody extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle pageTitle={this.props.pageTitle}/>
        <Divider/>
        <div className="d-flex justify-content-center">
        {/* <p className="comingSoon">Coming Soon</p> */}
        <img src={cicd} alt=""/>
        </div>
        <Divider/>
      </Container>
    );
  }
}
