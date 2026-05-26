import React from 'react';
import Divider from '../divider/Divider.js';
import { Container, Button, Jumbotron } from 'reactstrap';
import PageTitle from '../header/page-title/PageTitle.js';
import Welcome from './welcome/Welcome.js';

export default class HomeBody extends React.Component {
  render() {
    return (
      <Container>
        <PageTitle pageTitle={this.props.pageTitle}/>
        <Divider/>
        <Welcome/>
          <Jumbotron>
            <h1 className="display-3">Scratch</h1>
            <h4>Featured Project</h4>
            <p className="lead"> </p>
            <hr className="my-2" />
            <p>Simple note taking app using the serverless framework with a NodeJS backend. Scratch is completely responsive and will work on any device. Create an account and take some notes yourself!</p>
            <p className="lead">
              <a href="http://d32ugifdwq37wt.cloudfront.net/"><Button color="primary"> Try it out! </Button></a>
            </p>
          </Jumbotron>
        <Divider/>
      </Container>
    );
  }
}
