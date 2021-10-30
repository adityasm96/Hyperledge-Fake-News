import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Prototype 1.0</Link>
          </Navbar.Brand>
          
        </Navbar.Header>
        <Navbar>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              Login
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
          </Nav>
        </Navbar>
      </Navbar>
    )
  }
}
