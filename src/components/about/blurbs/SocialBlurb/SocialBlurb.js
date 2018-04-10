import React from 'react';
import { Row } from 'reactstrap'

export default class SocialBlurb extends React.Component {
  render() {
    return (
      <div className="social-blurb">
        <Row>
          <a className="aStyle" href="https://github.com/jfavaron"><i className="fa fa-github"></i><span> Github </span></a>
        </Row>
        <Row>
          <a className="aStyle" href="https://www.linkedin.com/in/james-favaron-279a16ab/"><i className="fa fa-linkedin"></i><span> LinkedIn </span></a>
        </Row>
        <Row>
          <i className="fa fa-envelope icon-space"></i><span className="icon-spacer"> jimmyfavaron@gmail.com </span>
        </Row>
        <Row>
          <i className="fa fa-phone icon-space"></i><span className="icon-spacer"> (830) 928-4747 </span>
        </Row>
      </div>
    );
  }
}
