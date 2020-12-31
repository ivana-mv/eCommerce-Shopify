import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './navBar.scss';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import Icon from '../CartIcon/CartIcon.js';


export default function NavBar(){

  return(
    <>
    <Navbar bg="dark" variant="dark" style={{ minWidth: 700 }}>
      <Navbar.Brand>Shopify</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <div>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
          <Link to={'Computadoras'}>
            <NavDropdown.Item path='/Computadoras' href='Computadoras'>Computadoras</NavDropdown.Item>
          </Link>
          <Link to={'Lectura'}>
            <NavDropdown.Item path='/Computadoras' href='Lectura'>Lectura</NavDropdown.Item>
          </Link>
          <Link to={'Fotografia'}>
            <NavDropdown.Item path='/Fotogracia' href='Fotografia'>Fotografía</NavDropdown.Item>
          </Link>
      </NavDropdown>
        </div>
      </Nav>
      <Icon></Icon>
    </Navbar>
  </>
  )
}