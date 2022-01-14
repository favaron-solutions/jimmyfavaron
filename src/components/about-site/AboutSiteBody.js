import React from 'react';
import Divider from '../divider/Divider.js';
import { Container } from 'reactstrap';
import PageTitle from '../header/page-title/PageTitle.js';
import cicd from '../../assets/ci-cd.svg';

export default class AboutSiteBody extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle pageTitle={this.props.pageTitle}/>
        <Divider/>
        <div className="d-flex justify-content-center">
        <p>heyo</p>       
        <img id="cicd-pipeline" src={cicd} alt=""/>
        <p>testing</p>
        </div>
        <Divider/>
      </Container>
    );
  }
}
