import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="black" light>
          <NavbarBrand href="/" className="mr-auto">Jimmy Favaron</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link className="nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/about">About Me</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/projects">Projects</Link>
              </NavItem>
              <NavItem>              
                <a className="nav-link" href="https://github.com/jfavaron/jimmyfavaron"><i className="fa fa-github"></i><span> Github</span></a>
              </NavItem>
              <NavItem>              
                <a className="nav-link" href="https://www.linkedin.com/in/james-favaron-279a16ab/"><i className="fa fa-github"></i><span> LinkedIn</span></a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
