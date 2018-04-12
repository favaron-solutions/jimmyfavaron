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
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/about">About Me</Link>
              </NavItem>
              <NavItem>
                <Link to="/projects">Projects</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog">My Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/aboutSite">About This Site</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
