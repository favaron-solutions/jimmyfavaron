import React from 'react';
import { Row } from 'reactstrap'

export default class SocialBlurb extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <a className="aStyle" href="https://github.com/jfavaron"><i className="fa fa-github"></i><span> Github </span></a>
        </Row>
        <Row>
          <a className="aStyle" href="https://www.linkedin.com/in/james-favaron-279a16ab/"><i className="fa fa-linkedin"></i><span> LinkedIn </span></a>
        </Row>
        <Row>
          <a className="aStyle" href="http://www.github.com"><i className="fa fa-github"></i><span> Other Links </span></a>
        </Row>
        <Row>
          <a className="aStyle" href="http://www.github.com"><i className="fa fa-github"></i><span> Cool Fun Stuff </span></a>
        </Row>
      </div>
    );
  }
}
