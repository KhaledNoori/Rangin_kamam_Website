import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from './logo.png'; // فایل عکس لوگو
import './Navbar.css';
const MyNavbar = () => {
  const [showNavItems, setShowNavItems] = useState(false);

  const toggleNavItems = () => {
    setShowNavItems(!showNavItems);
  };

  return (
    <Navbar expand="lg" className="shadow-lg">
      <Container>
        <Navbar.Brand href="#">
          <img src="src/components/Header/logo.png." alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavItems}>
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className={showNavItems ? 'show' : ''}>
          <Nav className="ml-auto" dir='rtl'>
            <Nav.Link href="#">صفحه اصلی</Nav.Link>
            <Nav.Link href="#">درباره ما</Nav.Link>
            <Nav.Link href="#">دیدگاه</Nav.Link>
            <Nav.Link href="#">محصولات</Nav.Link>
            <Nav.Link href="#">اخبار</Nav.Link>
            <Nav.Link href="#">تماس با ما</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
