import React from 'react';
import { Row, Col } from 'reactstrap';
import Layout from './icon-groups/Layout.js';
import Languages from './icon-groups/Languages.js';
import Tools from './icon-groups/Tools.js';
import Apis from './icon-groups/Apis.js';
import Devops from './icon-groups/Devops.js';
import Frameworks from './icon-groups/Frameworks.js';


export default class TechnologyList extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} md={6}>
              <Frameworks/>
          </Col>
          <Col xs={12} md={6}>
              <Languages/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
              <Devops/>
          </Col>
          <Col sm={12} md={6}>
              <Layout/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
              <Tools/>
          </Col>
          <Col sm={12} md={6}>
              <Apis/>
          </Col>
        </Row>
      </div>
    );
  }
}
