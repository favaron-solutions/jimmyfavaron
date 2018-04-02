import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Row } from 'reactstrap';
import '../../../index.css';
import 'font-awesome/css/font-awesome.min.css';

export default class SideBar extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {

    return (
      <Menu right>
        <Row>
          <i className="fa fa-home">
          </i>
          <Link id="home" className="menu-item aStyle" to="/">
            <span> Home</span>
            </Link>
        </Row>
        <div className="blogRowSpacer">
        </div>
        <Row>
          <i className="fa fa-comment">
          </i>
          <Link id="about" className="menu-item aStyle" to="/about">
            <span> About</span>
            </Link>
        </Row>
        <div className="blogRowSpacer">
        </div>
        <Row>
          <i className="fa fa-book">
          </i>
          <a id="blog" className="menu-item aStyle" href="/blog">
            <span> Blog</span>
          </a>
        </Row>
        <div className="blogRowSpacer">
        </div>
        <Row>
          <i className="fa fa-archive">
          </i>
          <a
            id="projects"
            className="menu-item aStyle"
            href="/projects">
            <span> Projects</span>
          </a>
        </Row>
        <div className="blogRowSpacer">
        </div>
      </Menu>
    );
  }
}
