import React from 'react';
import { Row, Col } from 'reactstrap';
import Cloud from './icon-groups/Cloud.js';
import Languages from './icon-groups/Languages.js';
import OperatingSystems from './icon-groups/OperatingSystems.js';


export default class TechnologyList extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12} md={12}>
              <Cloud/>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
              <OperatingSystems/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
              <Languages/>
          </Col>
        </Row>
      </div>
    );
  }
}
