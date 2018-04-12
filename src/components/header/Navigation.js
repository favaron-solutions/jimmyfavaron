import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/blog">My Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/aboutSite">About This Site</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
