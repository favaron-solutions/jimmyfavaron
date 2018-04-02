import React from 'react';
import Header from './header/Header.js'
import Divider from './divider/Divider.js'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header pageTitle={this.props.pageTitle}/>
        <body>
          <Container>
            <Row>
              <Col className="d-flex justify-content-center">
                <Jumbotron>
                <h1 className="display-5">Featured Post</h1>
                <p className="lead"> Sailing the Seas in Style</p>
                <hr className="my-2" />
                <p> A lesson in dressin' by the one and only Gilligan of 2018.</p>
                <p className="lead">
                  <Button color="primary">Read Post</Button>
                </p>
                </Jumbotron>
              </Col>
            </Row>
            <hr className="hrStyle"/>
            <Row>
              <Col className="d-flex justify-content-center">
              <h3> THIS WEBSITE IS COMPLETELY SERVERLESS </h3>
              </Col>
            </Row>
            <Row>
              <Col md={8} className="d-flex justify-content-center">
                <p>
                  That's right, no servers. This is the future. Whether you're a small business that just needs a landing page for generating leads, or a corporation looking to scale for a major event, you should consider serverless for your next project.
                </p>
              </Col>
              <Col md={4} className="d-flex justify-content-center">
              <Container>
                <Row className="d-flex justify-content-center">
                  <h4> Resources </h4>
                </Row>
                <Row>
                  <a id="aws" className="menu-item aStyle" href="https://aws.amazon.com/serverless/">
                    <span>  AWS Serverless Compute </span>
                  </a>
                </Row>
                <Row>
                  <a id="serverless" className="menu-item aStyle" href="https://serverless.com/learn/">
                    <span>  Serverless Framework </span>
                  </a>
                </Row>
              </Container>
              </Col>
            </Row>
            <hr className="hrStyle"/>
            <Row>
              <Col className="d-flex justify-content-center">
              <h3> NO SERVER MANAGEMENT </h3>
              </Col>
              <Col className="d-flex justify-content-center">
              <h3> FLEXIBLE SCALING </h3>
              </Col>
              <Col className="d-flex justify-content-center">
              <h3> AUTOMATED HIGH AVAILABILITY </h3>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
              <p> There is no need to provision or maintain any servers. There is no software or runtime to install, maintain, or administer. </p>
              </Col>
              <Col className="d-flex justify-content-center">
              <p> Your application can be scaled automatically or by adjusting its capacity through toggling the units of consumption (e.g. throughput, memory) rather than units of individual servers. </p>
              </Col>
              <Col className="d-flex justify-content-center">
              <p> Serverless applications have built-in availability and fault tolerance. You do not need to architect for these capabilities since the services running the application provide them by default. </p>
              </Col>
            </Row>
            <hr className="hrStyle"/>

          </Container>
        </body>
      </div>
    );
  }
}
