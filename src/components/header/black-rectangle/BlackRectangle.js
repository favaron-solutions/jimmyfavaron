import React from 'react';
import PageTitle from '../page-title/PageTitle.js'
import SideBar from '../side-bar/SideBar.js'
import { Row, Col, Container } from 'reactstrap';

export default class BlackRectangle extends React.Component {
  render() {
    return (
      <Container>
        <div className="blackBar fixed-top">
          <SideBar/>
          <Row>
            <Col xs={1} md={1}/>
            <Col xs={4} md={2}>
              <PageTitle pageTitle={this.props.pageTitle} />
            </Col>
            <Col xs={7} md={9}/>
          </Row>
        </div>
      </Container>
    );
  }
}
