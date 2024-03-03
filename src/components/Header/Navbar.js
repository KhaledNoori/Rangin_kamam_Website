import React from "react";
import { Container, Navbar, Nav, } from "react-bootstrap";

import './Navbar.css';

const MyNavbar = () => {
  return (
    <header >
      <Navbar collapseOnSelect expand="lg" className="nav-bg fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="navBrand">
            <img src="./assets/images/logo/logo.png"
              width="50"
              height="50"
              className="d-inline-block align-center"
              alt="لوگو" />

          </Navbar.Brand>
          <h3 className="text-light ">Rangin Kaman Website</h3>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mx-auto" ></Nav>
            <Nav dir="rtl">
              <Nav.Link href="#home" className="link fs-5 fw-bold">صفحه اصلی</Nav.Link>
              <Nav.Link href="#about us" className="link fs-5 fw-bold">در باره ما</Nav.Link>
              <Nav.Link href="#vision" className="link fs-5 fw-bold"> دیدگاه </Nav.Link>
              <Nav.Link href="#products" className="link fs-5 fw-bold" >  محصولات </Nav.Link>
              <Nav.Link href="#news" className="link fs-5 fw-bold"> اخبار </Nav.Link>
              <Nav.Link href="#contact" className="link fs-5 fw-bold"> تماس باما  </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};


export default MyNavbar;
