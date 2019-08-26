import React from 'react';
import logo from "./logo.svg";
import { Container, Row, Col } from 'reactstrap';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Container>
      <div>
        <Navbar id="navbar" color="light" light expand="md">
          <NavbarBrand href="/" ><img src={logo} alt="logo" style={{width:300, marginTop: -7}} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Career</NavLink>
              </NavItem>
              <UncontrolledDropdown nav  >
                <DropdownToggle nav >
                Departments
                </DropdownToggle >
                <DropdownMenu >
                  <DropdownItem>
                  Marketing & PR
                  </DropdownItem>
                  <DropdownItem>
                  Customer Success & Sales
                  </DropdownItem>
                  <DropdownItem>
                  It, Product & Design & UX
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      </Container>
    );
  }
}
